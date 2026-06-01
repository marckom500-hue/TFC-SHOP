import { useState } from 'react';
import styles from './Newsletter.module.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setEmail('');
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>📩 ABONNEZ-VOUS</h2>
      <p className={styles.sub}>Recevez nos meilleures offres, lancements et codes promo en avant-première</p>
      {done ? (
        <p className={styles.success}>✅ Merci ! Vous êtes bien inscrit.</p>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Votre adresse email..."
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <button type="submit">S'inscrire</button>
        </form>
      )}
    </section>
  );
}
