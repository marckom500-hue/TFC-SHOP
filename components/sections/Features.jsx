import styles from './Features.module.css';

const FEATURES = [
  { icon: '🚚', title: 'Livraison rapide', desc: 'Douala, Yaoundé & partout au Cameroun en 24-72h' },
  { icon: '✅', title: 'Produits authentiques', desc: 'Tous nos produits sont vérifiés et garantis d\'origine' },
  { icon: '🔄', title: 'Retour facile 7 jours', desc: 'Pas satisfait ? Retournez sans frais sous 7 jours' },
  { icon: '🔒', title: 'Paiement sécurisé', desc: 'MTN Money, Orange Money, carte bancaire acceptés' },
];

export default function Features() {
  return (
    <div className={styles.grid}>
      {FEATURES.map(f => (
        <div key={f.title} className={styles.card}>
          <div className={styles.icon}>{f.icon}</div>
          <div>
            <h4 className={styles.title}>{f.title}</h4>
            <p className={styles.desc}>{f.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
