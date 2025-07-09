import { Button, HeaderContainer } from '@/styles/components/header';
import { HandbagIcon } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';

import logoImg from '../assets/logo.svg';
import { useContext } from 'react';
import { CartContext } from '@/contexts/CartContext';

interface HeaderProps {
  onDisplayCart: (value: boolean) => void;
}

export function Header({ onDisplayCart }: HeaderProps) {
  const { products } = useContext(CartContext);

  return (
    <>
      <HeaderContainer>
        <Link href={'/'}>
          <Image src={logoImg} alt="" />
        </Link>

        <Button hasProduct={products.length > 0} onClick={() => onDisplayCart(true)}>
          {products.length > 0 && <span className="cart-count">{products.length}</span>}
          <HandbagIcon size={24} weight="bold" />
        </Button>
      </HeaderContainer>
    </>
  );
}
