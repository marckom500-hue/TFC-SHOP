import styles from './BannerRow.module.css';

const BANNERS = [
  { tag: 'Collection 2026', title: ['AUDIO', 'PREMIUM'], sub: 'Casques & écouteurs haut de gamme', cta: 'Voir la collection', href: '/categorie/audio', deco: '🎧', style: 'b1' },
  { tag: 'Indispensable', title: ['ÉNERGIE', 'PARTOUT'], sub: 'Power banks & chargeurs rapides', cta: 'Découvrir', href: '/categorie/power', deco: '⚡', style: 'b2' },
];

export default function BannerRow() {
  return (
    <div className={styles.row}>
      {BANNERS.map((b) => (
        <a key={b.style} href={b.href} className={`${styles.banner} ${styles[b.style]}`}>
          <div className={styles.content}>
            <span className={styles.tag}>{b.tag}</span>
            <h3 className={styles.title}>{b.title[0]}<br />{b.title[1]}</h3>
            <p className={styles.sub}>{b.sub}</p>
            <span className={styles.btn}>{b.cta}</span>
          </div>
          <span className={styles.deco}>{b.deco}</span>
        </a>
      ))}
    </div>
  );
}
