import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './HeroSlider.module.css';

const SLIDES = [
  {
    tag: '⚡ Nouvelle collection',
    title: ['ÉCOUTEURS', 'TWS PRO X'],
    desc: 'Son cristallin, 40h d\'autonomie, réduction de bruit active. L\'expérience audio ultime.',
    price: '18 500 FCFA',
    cta: 'Acheter maintenant',
    href: '/categorie/audio',
    bg: 'slide1',
    img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=440&h=440&fit=crop&auto=format',
  },
  {
    tag: '🔥 Bestseller',
    title: ['POWER BANK', '20 000 mAh'],
    desc: 'Recharge rapide 65W, charge 3 appareils simultanément. Ne soyez plus jamais à court.',
    price: '24 900 FCFA',
    cta: 'Commander',
    href: '/categorie/power',
    bg: 'slide2',
    img: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=440&h=440&fit=crop&auto=format',
  },
  {
    tag: '⌚ Nouveauté',
    title: ['SMART', 'WATCH 5 PRO'],
    desc: 'Santé, sport, notifications. La montre connectée qui s\'adapte à votre vie active.',
    price: '35 000 FCFA',
    cta: 'Découvrir',
    href: '/categorie/watches',
    bg: 'slide3',
    img: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=440&h=440&fit=crop&auto=format',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);

  const go = (n) => setCurrent((n + SLIDES.length) % SLIDES.length);

  return (
    <section className={styles.hero}>
      <div className={styles.track} style={{ transform: `translateX(-${current * 100}%)` }}>
        {SLIDES.map((s, i) => (
          <div key={i} className={`${styles.slide} ${styles[s.bg]}`}>
            <div className={styles.content}>
              <span className={styles.tag}>{s.tag}</span>
              <h1 className={styles.title}>
                {s.title[0]}<br /><span>{s.title[1]}</span>
              </h1>
              <p className={styles.desc}>{s.desc}</p>
              <p className={styles.priceLabel}>À partir de <strong>{s.price}</strong></p>
              <div className={styles.btns}>
                <a href={s.href} className={styles.btnPrimary}>{s.cta}</a>
                <a href={s.href} className={styles.btnOutline}>En savoir plus</a>
              </div>
            </div>
            <div className={styles.imgWrap}>
              <Image src={s.img} alt={s.title.join(' ')} width={400} height={420} style={{ objectFit: 'contain' }} priority={i === 0} />
            </div>
          </div>
        ))}
      </div>

      <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={() => go(current - 1)} aria-label="Précédent">‹</button>
      <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={() => go(current + 1)} aria-label="Suivant">›</button>

      <div className={styles.dots}>
        {SLIDES.map((_, i) => (
          <button key={i} className={`${styles.dot} ${i === current ? styles.dotActive : ''}`} onClick={() => go(i)} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
    </section>
  );
}
