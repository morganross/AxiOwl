import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import heroOwl from '@site/static/img/axiowl-hero-owl.webp';
import styles from './index.module.css';

const cards = [
  {
    label: 'Start here',
    title: 'Understand AxiOwl',
    body: 'Learn the core workflow, who AxiOwl is for, and how provider messaging fits into day-to-day agent work.',
    to: '/docs/intro',
  },
  {
    label: 'Current reality',
    title: 'Read product status',
    body: 'Separate source, package, signature, installation, deployment, and end-to-end evidence before relying on a claim.',
    to: '/docs/reference/current-product-status',
  },
  {
    label: 'Providers and platforms',
    title: 'Check exact support',
    body: 'Compare the eleven Windows provider packages and the current Windows, Linux, macOS, iPhone, Android, and server boundaries.',
    to: '/docs/reference/provider-support-matrix',
  },
  {
    label: 'Security',
    title: 'Understand protected messaging',
    body: 'Learn how encryption, device trust, receiver authorization, replay rejection, and protected receipts remain separate.',
    to: '/docs/security',
  },
  {
    label: 'Installer',
    title: 'Choose what AxiOwl changes',
    body: 'Review provider discovery, selected-only ownership, A2A and XMPP features, cleanup, and lifecycle behavior.',
    to: '/docs/reference/installer-behavior-matrix',
  },
  {
    label: 'Protocols',
    title: 'Compare A2A and XMPP',
    body: 'See how standards A2A tasks and endpoint-protected XMPP actions solve different remote coordination problems.',
    to: '/docs/reference/protocol-support-matrix',
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
          {siteConfig.title} Documentation
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            Read the docs
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/reference/provider-support-matrix">
            Provider support
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
      description="AxiOwl documentation for provider messaging, A2A, secure XMPP, platform packages, installer ownership, updates, and security boundaries.">
      <HomepageHeader />
      <main className={styles.main}>
        <section className="container">
          <div className={styles.sectionHeading}>
            <p>Documentation paths</p>
            <Heading as="h2">Find the right starting point</Heading>
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
