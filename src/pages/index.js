import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import heroOwl from '@site/static/img/axiowl-hero-owl.webp';
import styles from './index.module.css';

const cards = [
  {
    label: 'Use cases',
    title: 'Put your AI tools to work together',
    body: 'Build cross-provider teams, delegate to specialists, compare results, and keep project context moving.',
    to: '/docs/use-cases',
  },
  {
    label: 'How it works',
    title: 'Follow a message from start to reply',
    body: 'See how discovery, identity, provider packages, transports, receipts, and replies fit into one clear journey.',
    to: '/docs/how-it-works',
  },
  {
    label: 'Get started',
    title: 'Send your first message',
    body: 'Install the integrations you want, discover a current session, send a focused request, and receive a reply.',
    to: '/docs/getting-started/install-first-run',
  },
  {
    label: 'Providers',
    title: 'Bring your preferred AI products',
    body: 'Coordinate Codex, Cursor, VS Code Copilot, Claude Code, Antigravity, OpenCode, Copilot CLI, and A2A agents.',
    to: '/docs/providers',
  },
  {
    label: 'Mobile control',
    title: 'Take your desktop agents with you',
    body: 'Pair an Android phone or iPhone, open an existing host session, send turns, and follow the live timeline.',
    to: '/docs/mobile',
  },
  {
    label: 'A2A',
    title: 'Connect standards-based agents',
    body: 'Call external A2A services, expose selected agent endpoints, and combine task results with local provider work.',
    to: '/docs/use-cases/connect-external-a2a-agents',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={clsx('container', styles.heroInner)}>
        <img className={styles.logo} src={heroOwl} alt="AxiOwl owl mascot" />
        <p className={styles.eyebrow}>Product documentation</p>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/use-cases">
            Explore use cases
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started/install-first-run">
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
          <div className={styles.sectionHeading}>
            <p>One coordination layer</p>
            <Heading as="h2">Choose what you want to accomplish</Heading>
          </div>
          <div className={styles.cardGrid}>
            {cards.map((card) => (
              <Link className={styles.card} to={card.to} key={card.title}>
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
