import Head from 'next/head';
import Layout from '../components/layout/Layout';
import FlashDeals from '../components/sections/FlashDeals';
import ProductGrid from '../components/sections/ProductGrid';
import { products } from '../data/products';

export default function OffresPage() {
  const flash = products.filter(p => p.flashDeal);
  const discounted = products.filter(p => p.discount && !p.flashDeal);
  return (
    <Layout>
      <Head><title>Offres du jour — TFC SHOP</title></Head>
      <div style={{ padding: '24px 0' }}>
        <FlashDeals products={flash} />
        <ProductGrid title="Toutes les promos" products={discounted} />
      </div>
    </Layout>
  );
}
