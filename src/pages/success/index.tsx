import { CartContext } from '@/contexts/CartContext';
import { stripe } from '@/lib/stripe';
import { ImageContainer, ImageProduct, SuccessContainer } from '@/styles/pages/success';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect } from 'react';
import Stripe from 'stripe';

import logoImg from '../../assets/logo.svg';

interface SuccessProps {
  customerName: string;
  products: {
    id: string;
    name: string;
    imageUrl: string;
  }[];
}

function Success({ customerName, products }: SuccessProps) {
  const { onClearLocalStorage } = useContext(CartContext);

  useEffect(() => {
    onClearLocalStorage();
  }, []);

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <Image src={logoImg} alt="" />

        <ImageContainer>
          {products.map((product) => (
            <ImageProduct key={product.id}>
              <Image src={product.imageUrl} alt="" width={126} height={126} />
            </ImageProduct>
          ))}
        </ImageContainer>

        <h1>Compra efetuada!</h1>
        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de{' '}
          {products.length === 1 ? `${products.length} camiseta` : `${products.length} camisetas`} já está a caminho da
          sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

Success.showHeader = false;

export default Success;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  });

  const customerName = session.customer_details?.name;

  const products = session.line_items?.data.map((item) => {
    const product = item.price?.product as Stripe.Product;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
    };
  });

  return {
    props: {
      customerName,
      products,
    },
  };
};
