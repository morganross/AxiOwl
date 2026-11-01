import React, {useEffect, useId, useMemo, useState} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

export default function DocsSearch() {
  const id = useId();
  const url = useBaseUrl('/search-index.json');
  const [records, setRecords] = useState([]);
  const [status, setStatus] = useState('loading');
  const [query, setQuery] = useState('');
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    setStatus('loading');
    fetch(url, {signal: controller.signal})
      .then((response) => {
        if (!response.ok) throw new Error('Search index unavailable');
        return response.json();
      })
      .then((data) => { setRecords(data); setStatus('ready'); })
      .catch(() => { if (!controller.signal.aborted) setStatus('error'); });
    return () => controller.abort();
  }, [url, attempt]);
  const words = query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  const matches = useMemo(() => {
    if (!query.trim()) return [];
    const terms = query.trim().toLocaleLowerCase().split(/\s+/);
    return records.filter((record) => {
      const text = `${record.title} ${record.description}`.toLocaleLowerCase();
      return terms.every((word) => text.includes(word));
    });
  }, [query, records]);

  return <div className="axiowl-docs-search" role="search" aria-label="Documentation">
    <label htmlFor={id}>Search documentation</label>
    <input id={id} type="search" value={query} autoComplete="off"
      onChange={(event) => setQuery(event.target.value)} />
    {status === 'error' && <p role="status">Search is unavailable. <button type="button"
      onClick={() => setAttempt(attempt + 1)}>Retry</button></p>}
    {words.length > 0 && status === 'loading' && <p role="status">Loading search...</p>}
    {words.length > 0 && status === 'ready' && <div>
      <p className="axiowl-docs-search-count" role="status">{matches.length === 0
        ? 'No matching guides.' : `${matches.length} matching ${matches.length === 1 ? 'guide' : 'guides'}`}</p>
      <ul>{matches.slice(0, 8).map((record) => <li key={record.url}>
        <Link to={record.url} onClick={() => setQuery('')}>{record.title}</Link>
        <p>{record.description}</p>
      </li>)}</ul>
    </div>}
  </div>;
}
