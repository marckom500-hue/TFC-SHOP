import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../../lib/CartContext';
import { useWishlist } from '../../lib/WishlistContext';
import { formatPrice } from '../../lib/utils';
import styles from './ProductCard.module.css';

const BADGE_LABELS = { hot: '🔥 HOT', new: 'NOUVEAU', sale: 'PROMO' };

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { toggle, isWished } = useWishlist();
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <Link href={`/produit/${product.id}`} className={styles.card}>
      {product.badge && (
        <span className={`${styles.badge} ${styles['badge_' + product.badge]}`}>
          {BADGE_LABELS[product.badge]}
        </span>
      )}
      <button
        className={styles.wish}
        onClick={(e) => { e.preventDefault(); toggle(product); }}
        aria-label="Favoris"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill={isWished(product.id) ? '#e63329' : 'none'} stroke={isWished(product.id) ? '#e63329' : '#aaa'} strokeWidth="2">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </button>
      <div className={styles.imgWrap}>
        <Image src={product.image} alt={product.name} fill sizes="220px" style={{ objectFit: 'contain' }} />
      </div>
      <div className={styles.info}>
        <p className={styles.name}>{product.name}</p>
        <div className={styles.rating}>
          <span className={styles.stars}>{'★'.repeat(Math.round(product.rating))}{'☆'.repeat(5 - Math.round(product.rating))}</span>
          <span className={styles.ratingCount}>({product.reviews})</span>
        </div>
        <div className={styles.priceRow}>
          <span className={styles.price}>{formatPrice(product.price)}</span>
          {product.oldPrice && <span className={styles.oldPrice}>{formatPrice(product.oldPrice)}</span>}
          {product.discount && <span className={styles.discount}>-{product.discount}%</span>}
        </div>
        <button className={`${styles.addBtn} ${added ? styles.added : ''}`} onClick={handleAdd}>
          {added ? '✓ Ajouté !' : '🛒 Ajouter au panier'}
        </button>
      </div>
    </Link>
  );
}
