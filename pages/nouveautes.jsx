import Head from 'next/head';
import Layout from '../components/layout/Layout';
import ProductGrid from '../components/sections/ProductGrid';
import { products } from '../data/products';

export default function NouveautesPage() {
  const newProds = products.filter(p => p.badge === 'new');
  return (
    <Layout>
      <Head><title>Nouvelles arrivées — TFC SHOP</title></Head>
      <div style={{ padding: '32px 24px' }}>
        <ProductGrid title="Nouvelles arrivées" products={newProds} />
      </div>
    </Layout>
  );
}
