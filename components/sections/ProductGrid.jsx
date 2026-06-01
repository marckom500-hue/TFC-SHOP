import ProductCard from '../product/ProductCard';
import styles from './ProductGrid.module.css';

export default function ProductGrid({ title, products, viewAllHref }) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {viewAllHref && <a href={viewAllHref} className={styles.viewAll}>Voir tout →</a>}
      </div>
      <div className={styles.grid}>
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  );
}
