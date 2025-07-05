import { globalStyles } from '@/styles/global';
import type { AppProps } from 'next/app';

import Image from 'next/image';

import logoImg from '../assets/logo.svg';
import { Button, Container, ContainerCarrinho, Header } from '@/styles/pages/app';
import { HandbagIcon, X, XIcon } from '@phosphor-icons/react';
import Link from 'next/link';
import { useState } from 'react';

// import {  } from '@phosphor-icons/react';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const [exibirCarrinho, setExibirCarrinho] = useState(false);

  return (
    <Container>
      <Header>
        <Link href={'/'}>
          <Image src={logoImg} alt="" />
        </Link>

        <Button onClick={() => setExibirCarrinho(true)}>
          <HandbagIcon size={24} weight="bold" />
        </Button>
      </Header>

      <Component {...pageProps} />

      <ContainerCarrinho open={exibirCarrinho}>
        <div className="close">
          <button onClick={() => setExibirCarrinho(false)}>
            <XIcon size={24} weight="bold" />
          </button>
        </div>

        <div className="info-geral">
          <div className="lista-pedido">
            <p>Sacola de Compras</p>
          </div>

          <div className="total-pedido"></div>
        </div>
      </ContainerCarrinho>
    </Container>
  );
}
