import React, {useEffect, useState} from 'react';
import OriginalNavbar from '@theme-original/Navbar';

const SHARED_STYLE_IDS = [
  'dashicons-css',
  'axiowl-theme-switcher-css',
  'axiowl-theme-picker-compact-css',
];

function installSharedStyles(sourceDocument) {
  const inlineStyle = sourceDocument.querySelector('style#axiowl-global-wordpress-chrome');
  if (inlineStyle && !document.getElementById('axiowl-global-wordpress-chrome')) {
    document.head.appendChild(inlineStyle.cloneNode(true));
  }

  SHARED_STYLE_IDS.forEach((id) => {
    const stylesheet = sourceDocument.getElementById(id);
    if (stylesheet && !document.getElementById(id)) {
      document.head.appendChild(stylesheet.cloneNode(true));
    }
  });
}

function prepareSharedHeader(sourceDocument) {
  const header = sourceDocument.querySelector('.axiowl-global-chrome--top');
  const switcher = sourceDocument.getElementById('axiowl-theme-switcher');
  if (!header || !switcher) {
    throw new Error('WordPress shared header is unavailable');
  }

  const inner = header.querySelector('.axiowl-global-nav__inner');
  const cta = inner?.querySelector('.axiowl-global-nav__cta');
  if (!inner || !cta) {
    throw new Error('WordPress shared header is incomplete');
  }

  switcher.hidden = false;
  inner.insertBefore(switcher, cta);

  header.querySelectorAll('.current-menu-item, .current-menu-ancestor').forEach((item) => {
    item.classList.remove('current-menu-item', 'current-menu-ancestor');
  });
  const docsLink = [...header.querySelectorAll('.axiowl-global-nav__items a')]
    .find((link) => new URL(link.href, window.location.origin).pathname === '/docs/');
  docsLink?.closest('li')?.classList.add('current-menu-item');

  return header.outerHTML;
}

function initializeMobileNavigation() {
  const toggle = document.querySelector('.axiowl-global-nav__toggle');
  const menu = document.getElementById('axiowl-primary-navigation');
  const header = toggle?.closest('.axiowl-global-chrome--top');
  if (!toggle || !menu || !header || header.dataset.axiowlMobileReady === '1') {
    return;
  }

  header.dataset.axiowlMobileReady = '1';
  header.classList.add('is-mobile-nav-ready');

  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open primary navigation');
    menu.classList.remove('is-open');
  };

  toggle.addEventListener('click', () => {
    if (toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      return;
    }
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close primary navigation');
    menu.classList.add('is-open');
  });
  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });
  window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 783px)').matches) closeMenu();
  });
}

function initializeSharedTheme(sourceDocument) {
  const allowed = [
    'signal-red', 'coral-pop', 'hot-pink', 'red-gold', 'neon-product',
    'axiowl-classic', 'mobile-blue', 'meter-mint', 'forest-gold', 'ocean-ink',
    'hero-midnight', 'hero-twilight', 'night-ocean', 'night-orchid',
    'night-forest', 'night-ember',
  ];
  let selected = 'signal-red';
  try {
    const saved = window.localStorage.getItem('axiowl-color-theme-v1');
    if (allowed.includes(saved)) selected = saved;
  } catch (error) {}
  document.documentElement.setAttribute('data-axiowl-theme', selected);

  if (document.getElementById('axiowl-shared-theme-script')) return;
  const sourceScript = sourceDocument.querySelector('script[src*="theme-switcher.v1.js"]');
  if (!sourceScript) return;
  const script = document.createElement('script');
  script.id = 'axiowl-shared-theme-script';
  script.src = sourceScript.src;
  script.defer = true;
  document.body.appendChild(script);
}

export default function Navbar() {
  const [sharedMarkup, setSharedMarkup] = useState(null);
  const [sourceDocument, setSourceDocument] = useState(null);

  useEffect(() => {
    let active = true;
    fetch('/', {credentials: 'same-origin', cache: 'no-store'})
      .then((response) => {
        if (!response.ok) throw new Error('WordPress header request failed');
        return response.text();
      })
      .then((html) => {
        if (!active) return;
        const parsed = new DOMParser().parseFromString(html, 'text/html');
        installSharedStyles(parsed);
        setSourceDocument(parsed);
        setSharedMarkup(prepareSharedHeader(parsed));
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!sharedMarkup || !sourceDocument) return;
    initializeMobileNavigation();
    initializeSharedTheme(sourceDocument);
  }, [sharedMarkup, sourceDocument]);

  if (!sharedMarkup) {
    return <OriginalNavbar />;
  }

  return (
    <div
      className="axiowl-shared-chrome-host"
      dangerouslySetInnerHTML={{__html: sharedMarkup}}
    />
  );
}
