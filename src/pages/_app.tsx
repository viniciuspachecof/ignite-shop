import { globalStyles } from '@/styles/global';
import type { AppProps } from 'next/app';

import { Container } from '@/styles/pages/app';
import { useState } from 'react';
import { Cart } from '@/components/Cart';
import { CartContextProvider } from '@/contexts/CartContext';
import { Header } from '@/components/Header';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const [displayCart, setDisplayCart] = useState(false);

  function handleDisplayCart(value: boolean) {
    setDisplayCart(value);
  }

  return (
    <CartContextProvider>
      <Container>
        <Header onDisplayCart={handleDisplayCart} />

        <Component {...pageProps} />

        <Cart displayCart={displayCart} onDisplayCart={handleDisplayCart} />
      </Container>
    </CartContextProvider>
  );
}
