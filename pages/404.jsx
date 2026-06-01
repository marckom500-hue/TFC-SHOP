import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout/Layout';
import styles from './404.module.css';

export default function NotFound() {
  return (
    <Layout>
      <Head><title>Page introuvable — TFC SHOP</title></Head>
      <div className={styles.page}>
        <div className={styles.code}>404</div>
        <h1 className={styles.title}>Page introuvable</h1>
        <p className={styles.desc}>La page que vous cherchez n'existe pas ou a été déplacée.</p>
        <Link href="/" className={styles.btn}>← Retour à l'accueil</Link>
      </div>
    </Layout>
  );
}
