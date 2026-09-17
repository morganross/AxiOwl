import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import heroOwl from '@site/static/img/axiowl-owl-book.png';
import {docsContentPath} from '../embedded/profile.mjs';
import styles from './index.module.css';

const cards = [
  {
    label: 'Use cases',
    title: 'Put your AI tools to work together',
    body: 'Build cross-provider teams, delegate to specialists, compare results, and keep project context moving.',
    slug: 'use-cases',
  },
  {
    label: 'How it works',
    title: 'Follow a message from start to reply',
    body: 'See how discovery, identity, provider packages, transports, receipts, and replies fit into one clear journey.',
    slug: 'how-it-works',
  },
  {
    label: 'Get started',
    title: 'Send your first message',
    body: 'Install the integrations you want, discover a current session, send a focused request, and receive a reply.',
    slug: 'getting-started',
  },
  {
    label: 'Providers',
    title: 'Bring your preferred AI products',
    body: 'Coordinate Codex, Cursor, VS Code Copilot, Claude Code, Antigravity, OpenCode, Copilot CLI, and A2A agents.',
    slug: 'providers',
  },
  {
    label: 'Mobile control',
    title: 'Take your desktop agents with you',
    body: 'Pair an Android phone or iPhone, open an existing host session, send turns, and follow the live timeline.',
    slug: 'mobile',
  },
  {
    label: 'A2A',
    title: 'Connect standards-based agents',
    body: 'Call external A2A services, expose selected agent endpoints, and combine task results with local provider work.',
    slug: 'a2a',
  },
];

function docsTo(siteConfig, slug) {
  return docsContentPath(siteConfig.customFields?.docsRouteBasePath ?? 'docs', slug);
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={clsx('container', styles.heroInner)}>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <img className={styles.logo} src={heroOwl} alt="AxiOwl owl reading a book" />
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to={docsTo(siteConfig, 'use-cases')}>
            Explore use cases
          </Link>
          <Link
            className="button button--secondary button--lg"
            to={docsTo(siteConfig, 'getting-started')}>
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Coordinate desktop AI agents locally or from a paired mobile app through AxiOwl hosts, provider integrations, and A2A services.">
      <HomepageHeader />
      <main className={styles.main}>
        <section className="container">
          <div className={styles.cardGrid}>
            {cards.map((card) => (
              <Link className={styles.card} to={docsTo(siteConfig, card.slug)} key={card.title}>
                <span className={styles.cardLabel}>{card.label}</span>
                <h2>{card.title}</h2>
                <p>{card.body}</p>
                <span className={styles.cardAction}>Open documentation</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
