import Head from 'next/head';
import Layout from '../../components/layout/Layout';
import ProductCard from '../../components/product/ProductCard';
import { products, categories } from '../../data/products';
import styles from './slug.module.css';

export async function getStaticPaths() {
  return {
    paths: categories.map(c => ({ params: { slug: c.id } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const category = categories.find(c => c.id === params.slug) || null;
  const catProducts = products.filter(p => p.category === params.slug);
  return { props: { category, catProducts } };
}

export default function CategoryPage({ category, catProducts }) {
  if (!category) return null;
  return (
    <Layout>
      <Head><title>{category.label} — TFC SHOP</title></Head>
      <div className={styles.page}>
        <div className={styles.header}>
          <span className={styles.icon}>{category.icon}</span>
          <div>
            <h1 className={styles.title}>{category.label}</h1>
            <p className={styles.count}>{catProducts.length} produit{catProducts.length !== 1 ? 's' : ''}</p>
          </div>
        </div>
        {catProducts.length === 0 ? (
          <div className={styles.empty}>
            <p>Aucun produit dans cette catégorie pour le moment.</p>
            <a href="/" className={styles.back}>← Retour à l'accueil</a>
          </div>
        ) : (
          <div className={styles.grid}>
            {catProducts.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </div>
    </Layout>
  );
}
