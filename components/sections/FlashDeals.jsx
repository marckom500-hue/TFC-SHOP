import { useState, useEffect } from 'react';
import ProductCard from '../product/ProductCard';
import styles from './FlashDeals.module.css';

export default function FlashDeals({ products }) {
  const END_SECS = 5 * 3600 + 42 * 60 + 17;
  const [secs, setSecs] = useState(END_SECS);

  useEffect(() => {
    const t = setInterval(() => setSecs(s => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, []);

  const h = String(Math.floor(secs / 3600)).padStart(2, '0');
  const m = String(Math.floor((secs % 3600) / 60)).padStart(2, '0');
  const s = String(secs % 60).padStart(2, '0');

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>⚡ VENTES FLASH</h2>
        <div className={styles.right}>
          <span className={styles.endsLabel}>Se termine dans :</span>
          <div className={styles.countdown}>
            {[['h', h], ['m', m], ['s', s]].map(([label, val], i, arr) => (
              <span key={label} className={styles.cBlock}>
                <strong>{val}</strong>
                <small>{label === 'h' ? 'Heures' : label === 'm' ? 'Min' : 'Sec'}</small>
                {i < arr.length - 1 && <span className={styles.sep}>:</span>}
              </span>
            ))}
          </div>
          <a href="/offres" className={styles.viewAll}>Voir tout →</a>
        </div>
      </div>
      <div className={styles.grid}>
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  );
}
