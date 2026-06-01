import Head from 'next/head';
import Layout from '../components/layout/Layout';
import ProductGrid from '../components/sections/ProductGrid';
import { products } from '../data/products';

export default function MeilleuresVentesPage() {
  const best = [...products].sort((a, b) => b.reviews - a.reviews);
  return (
    <Layout>
      <Head><title>Meilleures ventes — TFC SHOP</title></Head>
      <div style={{ padding: '32px 24px' }}>
        <ProductGrid title="Meilleures ventes" products={best} />
      </div>
    </Layout>
  );
}
