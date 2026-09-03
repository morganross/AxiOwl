import React, {useEffect, useState} from 'react';
import {useColorMode} from '@docusaurus/theme-common';
import clsx from 'clsx';
import styles from './styles.module.css';

const STORAGE_KEY = 'axiowl-docs-palette-v1';

const palettes = [
  {id: 'signal-red', name: 'Signal Red + Cyan', number: '01'},
  {id: 'coral-pop', name: 'Coral Pop', number: '02'},
  {id: 'hot-pink', name: 'Hot Pink + Navy', number: '03'},
  {id: 'red-gold', name: 'Red + Gold', number: '04'},
  {id: 'neon-product', name: 'Neon Product', number: '05'},
  {id: 'axiowl-classic', name: 'AxiOwl Classic', number: '06'},
  {id: 'mobile-blue', name: 'Mobile Blue + Amber', number: '07'},
  {id: 'meter-mint', name: 'Usage Meter Mint + Coral', number: '08'},
  {id: 'forest-gold', name: 'Forest + Gold', number: '09'},
  {id: 'ocean-ink', name: 'Ocean Ink', number: '10'},
  {id: 'hero-midnight', name: 'Hero Midnight + Coral', number: '11'},
  {id: 'hero-twilight', name: 'Hero Twilight + Violet', number: '12'},
];

function applyPalette(palette) {
  document.documentElement.dataset.axiowlPalette = palette.id;
  window.localStorage.setItem(STORAGE_KEY, palette.id);
}

export default function ColorModeToggle({className}) {
  const {colorMode, setColorMode} = useColorMode();
  const [palette, setPalette] = useState(palettes[0]);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const selected = palettes.find((item) => item.id === saved) || palettes[0];
    applyPalette(selected);
    setPalette(selected);
  }, []);

  useEffect(() => {
    if (colorMode !== 'light') {
      setColorMode('light');
    }
  }, [colorMode, setColorMode]);

  function move(direction) {
    const index = palettes.findIndex((item) => item.id === palette.id);
    const next = palettes[(index + direction + palettes.length) % palettes.length];
    applyPalette(next);
    setPalette(next);
  }

  return (
    <div className={clsx(styles.picker, className)} role="group" aria-label="AxiOwl color palette">
      <button type="button" className={styles.arrow} onClick={() => move(-1)} aria-label="Previous color palette">
        &#x2039;
      </button>
      <span className={styles.current} data-palette={palette.id} role="status" aria-live="polite" aria-label={`Palette ${palette.number}: ${palette.name}`}>
        <span className={styles.swatch} aria-hidden="true" />
        <span className={styles.number} aria-hidden="true">{palette.number}</span>
        <span className={styles.screenOnly}>{palette.name}</span>
      </span>
      <button type="button" className={styles.arrow} onClick={() => move(1)} aria-label="Next color palette">
        &#x203A;
      </button>
    </div>
  );
}
