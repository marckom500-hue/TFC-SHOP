import { brands } from '../../data/products';
import styles from './BrandsStrip.module.css';

export default function BrandsStrip() {
  return (
    <div className={styles.strip}>
      {brands.map(b => (
        <div key={b} className={styles.brand}>{b}</div>
      ))}
    </div>
  );
}
