import Head from 'next/head';
import Layout from '../components/layout/Layout';
import ProductCard from '../components/product/ProductCard';
import { useWishlist } from '../lib/WishlistContext';
import styles from './favoris.module.css';

export default function FavorisPage() {
  const { items } = useWishlist();
  return (
    <Layout>
      <Head><title>Mes favoris — TFC SHOP</title></Head>
      <div className={styles.page}>
        <h1 className={styles.title}>❤️ Mes favoris</h1>
        {items.length === 0 ? (
          <div className={styles.empty}>
            <p>Vous n'avez pas encore de favoris.</p>
            <a href="/" className={styles.back}>Explorer les produits →</a>
          </div>
        ) : (
          <div className={styles.grid}>
            {items.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </div>
    </Layout>
  );
}
