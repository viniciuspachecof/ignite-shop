import { globalStyles } from '@/styles/global';
import type { AppProps } from 'next/app';

import Image from 'next/image';

import logoImg from '../assets/logo.svg';
import { Button, Container, Header } from '@/styles/pages/app';
import { HandbagIcon } from '@phosphor-icons/react';
import Link from 'next/link';
import { useState } from 'react';
import { Cart } from '@/components/cart';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const [displayCarrinho, setDisplayCart] = useState(false);

  function handleDisplayCart(value: boolean) {
    setDisplayCart(value);
  }

  return (
    <Container>
      <Header>
        <Link href={'/'}>
          <Image src={logoImg} alt="" />
        </Link>

        <Button onClick={() => handleDisplayCart(true)}>
          <HandbagIcon size={24} weight="bold" />
        </Button>
      </Header>

      <Component {...pageProps} />

      <Cart displayCart={displayCarrinho} onDisplayCart={handleDisplayCart} />
    </Container>
  );
}
