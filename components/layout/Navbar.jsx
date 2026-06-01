import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useCart } from '../../lib/CartContext';
import { useWishlist } from '../../lib/WishlistContext';
import styles from './Navbar.module.css';

const NAV_ITEMS = [
  {
    label: 'Audio',
    links: [
      { href: '/categorie/audio', label: 'Tous les audio' },
      { href: '/categorie/audio', label: 'Écouteurs TWS' },
      { href: '/categorie/audio', label: 'Casques' },
      { href: '/categorie/audio', label: 'Enceintes' },
      { href: '/categorie/audio', label: 'Barres de son' },
    ],
  },
  {
    label: 'Téléphones',
    links: [
      { href: '/categorie/phones', label: 'Tous les téléphones' },
      { href: '/categorie/phones', label: 'Smartphones' },
      { href: '/categorie/phones', label: 'Accessoires' },
    ],
  },
  {
    label: 'Énergie',
    links: [
      { href: '/categorie/power', label: 'Power Banks' },
      { href: '/categorie/power', label: 'Câbles & Chargeurs' },
      { href: '/categorie/power', label: 'Solaire' },
    ],
  },
  { label: 'Montres', href: '/categorie/watches' },
  { label: 'Maison', href: '/categorie/home' },
  {
    label: 'Nouveautés',
    links: [
      { href: '/nouveautes', label: 'Nouvelles arrivées' },
      { href: '/meilleures-ventes', label: 'Meilleures ventes' },
    ],
  },
];

export default function Navbar() {
  const { count } = useCart();
  const { count: wishCount } = useWishlist();
  const [search, setSearch] = useState('');
  const [openMenu, setOpenMenu] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <>
      <div className={styles.announce}>
        🎉 <strong>LIVRAISON GRATUITE</strong> sur toutes commandes ≥ 15 000 FCFA —{' '}
        <Link href="/offres">Commander maintenant ›</Link>
      </div>
      <nav className={styles.nav} ref={navRef}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>TFC</div>
          <div>
            <div className={styles.logoText}>TFC <span>SHOP</span></div>
            <div className={styles.logoSub}>Cameroun officiel</div>
          </div>
        </Link>

        <div className={styles.links}>
          <Link href="/offres" className={styles.dealsLink}>Offres du jour</Link>
          {NAV_ITEMS.map((item) =>
            item.links ? (
              <div className={styles.dropWrap} key={item.label}>
                <button
                  className={styles.dropTrigger}
                  onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                >
                  {item.label} <span>▾</span>
                </button>
                {openMenu === item.label && (
                  <div className={styles.dropdown}>
                    {item.links.map((l) => (
                      <Link key={l.label} href={l.href} onClick={() => setOpenMenu(null)}>{l.label}</Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.label} href={item.href}>{item.label}</Link>
            )
          )}
        </div>

        <div className={styles.actions}>
          <div className={styles.searchBox}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#999"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
            <input
              type="text"
              placeholder="Rechercher un produit..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <Link href="/favoris">
            <button className={styles.iconBtn} aria-label="Favoris">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#666"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              {wishCount > 0 && <span className={styles.badge}>{wishCount}</span>}
            </button>
          </Link>
          <Link href="/panier">
            <button className={styles.iconBtn} aria-label="Panier">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#666"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96C5 16.1 6.9 18 9 18h12v-2H9.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63H19c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
              {count > 0 && <span className={styles.badge}>{count}</span>}
            </button>
          </Link>
          <Link href="/auth/connexion">
            <button className={styles.btnSignin}>Se connecter</button>
          </Link>
        </div>
      </nav>
    </>
  );
}
