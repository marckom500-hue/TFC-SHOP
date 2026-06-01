import styles from './TopBar.module.css';

export default function TopBar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.left}>
        <span>📍 Cameroun</span>
        <span>📞 +237 6XX XXX XXX</span>
      </div>
      <div className={styles.right}>
        <a href="#">Suivre ma commande</a>
        <span className={styles.sep}>|</span>
        <a href="#">Centre d'aide</a>
        <span className={styles.sep}>|</span>
        <a href="#">Télécharger l'app</a>
        <span className={styles.sep}>|</span>
        <a href="#">🇫🇷 FR</a>
      </div>
    </div>
  );
}
