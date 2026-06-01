import Head from 'next/head';
import Layout from '../components/layout/Layout';
import HeroSlider from '../components/sections/HeroSlider';
import CategoryStrip from '../components/sections/CategoryStrip';
import FlashDeals from '../components/sections/FlashDeals';
import BannerRow from '../components/sections/BannerRow';
import ProductGrid from '../components/sections/ProductGrid';
import BrandsStrip from '../components/sections/BrandsStrip';
import Features from '../components/sections/Features';
import Newsletter from '../components/sections/Newsletter';
import { products } from '../data/products';

export default function Home() {
  const flashProducts   = products.filter(p => p.flashDeal);
  const bestSellers     = products.filter(p => p.featured).slice(0, 5);
  const newArrivals     = products.filter(p => p.badge === 'new').slice(0, 5);
  const recommended     = products.slice(0, 5);

  return (
    <Layout>
      <Head>
        <title>TFC SHOP — Centre d'achat officiel Cameroun</title>
        <meta name="description" content="TFC SHOP Cameroun — Écouteurs, power banks, smartphones, montres connectées. Livraison rapide dans tout le Cameroun." />
      </Head>
      <HeroSlider />
      <CategoryStrip />
      <FlashDeals products={flashProducts} />
      <BannerRow />
      <ProductGrid title="Meilleures ventes" products={bestSellers}     viewAllHref="/meilleures-ventes" />
      <BrandsStrip />
      <ProductGrid title="Nouvelles arrivées" products={newArrivals}    viewAllHref="/nouveautes" />
      <ProductGrid title="Vous aimerez aussi" products={recommended}    viewAllHref="/offres" />
      <Features />
      <Newsletter />
    </Layout>
  );
}
