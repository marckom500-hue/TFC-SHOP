import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Layout from '../../components/layout/Layout';
import ProductCard from '../../components/product/ProductCard';
import { products } from '../../data/products';
import { useCart } from '../../lib/CartContext';
import { useWishlist } from '../../lib/WishlistContext';
import { formatPrice } from '../../lib/utils';
import styles from './product.module.css';

export async function getStaticPaths() {
  return {
    paths: products.map(p => ({ params: { id: String(p.id) } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = products.find(p => p.id === Number(params.id)) || null;
  const related = products.filter(p => p.category === product?.category && p.id !== product?.id).slice(0, 4);
  return { props: { product, related } };
}

export default function ProductPage({ product, related }) {
  const { addToCart } = useCart();
  const { toggle, isWished } = useWishlist();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const router = useRouter();

  if (!product) { if (typeof window !== 'undefined') router.push('/'); return null; }

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <Layout>
      <Head><title>{product.name} — TFC SHOP</title></Head>
      <div className={styles.page}>
        <div className={styles.breadcrumb}>
          <a href="/">Accueil</a> › <a href={`/categorie/${product.category}`}>{product.category}</a> › {product.name}
        </div>
        <div className={styles.main}>
          <div className={styles.gallery}>
            <div className={styles.imgWrap}>
              <Image src={product.image} alt={product.name} fill sizes="500px" style={{ objectFit: 'contain' }} />
            </div>
          </div>
          <div className={styles.info}>
            {product.badge && <span className={styles.badge}>{product.badge.toUpperCase()}</span>}
            <h1 className={styles.name}>{product.name}</h1>
            <div className={styles.rating}>
              <span className={styles.stars}>{'★'.repeat(Math.round(product.rating))}{'☆'.repeat(5 - Math.round(product.rating))}</span>
              <span>{product.rating} — {product.reviews} avis</span>
            </div>
            <div className={styles.priceRow}>
              <span className={styles.price}>{formatPrice(product.price)}</span>
              {product.oldPrice && <span className={styles.oldPrice}>{formatPrice(product.oldPrice)}</span>}
              {product.discount && <span className={styles.discount}>-{product.discount}%</span>}
            </div>
            <p className={styles.desc}>{product.description}</p>
            <div className={styles.stock}>
              {product.stock > 10
                ? <span className={styles.inStock}>✓ En stock ({product.stock} disponibles)</span>
                : product.stock > 0
                ? <span className={styles.lowStock}>⚠ Plus que {product.stock} en stock !</span>
                : <span className={styles.outStock}>✗ Rupture de stock</span>
              }
            </div>
            <div className={styles.qtyRow}>
              <span>Quantité :</span>
              <div className={styles.qty}>
                <button onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
                <span>{qty}</span>
                <button onClick={() => setQty(q => q + 1)}>+</button>
              </div>
            </div>
            <div className={styles.actions}>
              <button className={`${styles.btnCart} ${added ? styles.added : ''}`} onClick={handleAdd}>
                {added ? '✓ Ajouté au panier !' : '🛒 Ajouter au panier'}
              </button>
              <button className={styles.btnWish} onClick={() => toggle(product)}>
                {isWished(product.id) ? '❤️' : '🤍'}
              </button>
            </div>
            <div className={styles.perks}>
              <span>🚚 Livraison 24-72h</span>
              <span>🔄 Retour 7 jours</span>
              <span>🔒 Paiement sécurisé</span>
            </div>
          </div>
        </div>
        {related.length > 0 && (
          <div className={styles.related}>
            <h2 className={styles.relTitle}>Produits similaires</h2>
            <div className={styles.relGrid}>
              {related.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
