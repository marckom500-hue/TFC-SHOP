import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layout/Layout';
import { useCart } from '../lib/CartContext';
import { formatPrice } from '../lib/utils';
import styles from './panier.module.css';

export default function PanierPage() {
  const { items, removeFromCart, updateQty, total, clearCart } = useCart();

  return (
    <Layout>
      <Head><title>Mon Panier — TFC SHOP</title></Head>
      <div className={styles.page}>
        <h1 className={styles.title}>🛒 Mon Panier</h1>
        {items.length === 0 ? (
          <div className={styles.empty}>
            <p>Votre panier est vide.</p>
            <Link href="/" className={styles.btnBack}>Continuer mes achats</Link>
          </div>
        ) : (
          <div className={styles.layout}>
            <div className={styles.items}>
              {items.map(item => (
                <div key={item.id} className={styles.item}>
                  <div className={styles.itemImg}>
                    <Image src={item.image} alt={item.name} fill sizes="100px" style={{ objectFit: 'contain' }} />
                  </div>
                  <div className={styles.itemInfo}>
                    <p className={styles.itemName}>{item.name}</p>
                    <p className={styles.itemPrice}>{formatPrice(item.price)}</p>
                  </div>
                  <div className={styles.qtyCtrl}>
                    <button onClick={() => updateQty(item.id, item.qty - 1)}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                  </div>
                  <p className={styles.itemTotal}>{formatPrice(item.price * item.qty)}</p>
                  <button className={styles.removeBtn} onClick={() => removeFromCart(item.id)}>✕</button>
                </div>
              ))}
              <button className={styles.clearBtn} onClick={clearCart}>Vider le panier</button>
            </div>
            <div className={styles.summary}>
              <h2>Résumé de commande</h2>
              <div className={styles.summaryRow}><span>Sous-total</span><span>{formatPrice(total)}</span></div>
              <div className={styles.summaryRow}><span>Livraison</span><span>{total >= 15000 ? 'GRATUITE' : formatPrice(2500)}</span></div>
              <div className={`${styles.summaryRow} ${styles.summaryTotal}`}>
                <span>Total</span>
                <span>{formatPrice(total >= 15000 ? total : total + 2500)}</span>
              </div>
              {total < 15000 && (
                <p className={styles.freeShipNote}>
                  Ajoutez {formatPrice(15000 - total)} pour la livraison gratuite !
                </p>
              )}
              <Link href="/checkout" className={styles.btnCheckout}>Commander maintenant →</Link>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
