import Link from 'next/link';
import styles from './Footer.module.css';

const FOOTER_LINKS = {
  Boutique: [
    { href: '/categorie/audio', label: 'Audio' },
    { href: '/categorie/telephones', label: 'Téléphones' },
    { href: '/categorie/power', label: 'Power Banks' },
    { href: '/categorie/montres', label: 'Montres' },
    { href: '/categorie/maison', label: 'Maison intelligente' },
    { href: '/nouveautes', label: 'Nouveautés' },
  ],
  'Service client': [
    { href: '/aide', label: "Centre d'aide" },
    { href: '/suivi-commande', label: 'Suivre ma commande' },
    { href: '/retours', label: 'Retours & échanges' },
    { href: '/garantie', label: 'Garantie produits' },
    { href: '/contact', label: 'Contactez-nous' },
    { href: '/faq', label: 'FAQ' },
  ],
  'À propos': [
    { href: '/about', label: 'Qui sommes-nous' },
    { href: '/magasins', label: 'Nos magasins' },
    { href: '/fidelite', label: 'Programme fidélité' },
    { href: '/revendeurs', label: 'Devenir revendeur' },
    { href: '/cgv', label: 'Conditions générales' },
    { href: '/confidentialite', label: 'Politique de confidentialité' },
  ],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoIcon}>TFC</div>
            <div>
              <div className={styles.logoText}>TFC <span>SHOP</span></div>
              <div className={styles.logoSub}>Cameroun officiel</div>
            </div>
          </Link>
          <p className={styles.tagline}>
            Votre boutique tech de référence au Cameroun. Produits authentiques,
            livraison rapide, service client irréprochable.
          </p>
          <div className={styles.socials}>
            {['📘','📷','🐦','▶️','💬'].map((icon, i) => (
              <a key={i} href="#" className={styles.socialLink} aria-label="Social">{icon}</a>
            ))}
          </div>
        </div>

        {Object.entries(FOOTER_LINKS).map(([title, links]) => (
          <div key={title} className={styles.col}>
            <h4>{title}</h4>
            <ul>
              {links.map(l => (
                <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} TFC SHOP Cameroun. Tous droits réservés.</span>
        <div className={styles.payments}>
          <span>Paiements :</span>
          {['MTN','ORANGE','VISA','MC'].map(p => (
            <span key={p} className={styles.payIcon}>{p}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
