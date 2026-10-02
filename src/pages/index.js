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
    label: 'Start here',
    title: 'Choose your AxiOwl product',
    body: 'Find the right product for agent messaging, a desktop workspace, mobile control, or account usage.',
    slug: 'intro',
  },
  {
    label: 'AxiOwl Messaging',
    title: 'Connect your agents',
    body: 'Discover real sessions, send focused work across providers, and follow the replies.',
    slug: 'getting-started',
  },
  {
    label: 'AxiOwl IDE',
    title: 'Bring the conversation and project together',
    body: 'Choose the account, model, and brain, then work with sessions and files in one desktop workspace.',
    slug: 'ide',
  },
  {
    label: 'AxiOwl Mobile',
    title: 'Keep your host sessions within reach',
    body: 'Pair your phone, follow agent activity, and use the controls exposed by your computer.',
    slug: 'mobile',
  },
  {
    label: 'AxiOwl Usage Meter',
    title: 'See capacity and reported spending',
    body: 'Understand account allowances, reset times, cloud costs, and dedicated phone companions.',
    slug: 'usage-meter',
  },
  {
    label: 'Security and privacy',
    title: 'Know what is connected and shared',
    body: 'Understand encrypted relay connections, device approval, account ownership, and permissions.',
    slug: 'security',
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
          <Link className="button button--primary button--lg" to={docsTo(siteConfig, 'intro')}>
            Choose a product
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
      description="Guides for AxiOwl Messaging, Axiom Messaging, AxiOwl IDE, AxiOwl Mobile, and AxiOwl Usage Meter.">
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
