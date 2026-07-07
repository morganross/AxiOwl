import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const cards = [
  {
    title: 'Source of truth',
    body: 'Provider support, installer behavior, architecture, and release checks live in one durable reference layer.',
    to: '/docs/reference',
  },
  {
    title: 'Provider status',
    body: 'Track supported, target, experimental, removed, and unsupported provider surfaces without stale cross-doc drift.',
    to: '/docs/reference/provider-support-matrix',
  },
  {
    title: 'Installer behavior',
    body: 'Understand MSI checkboxes, discovery, selected provider features, patches, cleanup, and logs.',
    to: '/docs/reference/installer-behavior-matrix',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <img className={styles.logo} src="img/axiowl-mascot.svg" alt="AxiOwl mascot" />
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            Read the Docs
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/reference/provider-support-matrix">
            Provider Matrix
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
      description="AxiOwl documentation for provider messaging, installer behavior, support, release QA, and security boundaries.">
      <HomepageHeader />
      <main className={styles.main}>
        <section className="container">
          <div className={styles.cardGrid}>
            {cards.map((card) => (
              <Link className={styles.card} to={card.to} key={card.title}>
                <h2>{card.title}</h2>
                <p>{card.body}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
