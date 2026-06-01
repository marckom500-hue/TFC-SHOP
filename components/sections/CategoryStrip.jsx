import Link from 'next/link';
import { categories } from '../../data/products';
import styles from './CategoryStrip.module.css';

export default function CategoryStrip() {
  return (
    <div className={styles.strip}>
      {categories.map((cat) => (
        <Link key={cat.id} href={cat.href} className={styles.item}>
          <div className={styles.icon}>{cat.icon}</div>
          <span className={styles.label}>{cat.label}</span>
        </Link>
      ))}
    </div>
  );
}
