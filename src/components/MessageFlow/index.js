import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function MessageFlow() {
  const desktop = useBaseUrl('/img/messaging-send-path.svg');
  const mobile = useBaseUrl('/img/messaging-send-path-mobile.svg');
  return <picture>
    <source media="(max-width: 767px)" srcSet={mobile} />
    <img src={desktop} alt="Source conversation, native Send, resolved destination, provider integration, selected target. Acceptance and observed delivery are separate."
      loading="lazy" decoding="async" style={{width: '100%', height: 'auto', maxWidth: '1100px'}} />
  </picture>;
}
