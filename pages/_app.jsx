import '../styles/globals.css';
import { CartProvider } from '../lib/CartContext';
import { WishlistProvider } from '../lib/WishlistContext';

export default function App({ Component, pageProps }) {
  return (
    <WishlistProvider>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </WishlistProvider>
  );
}
