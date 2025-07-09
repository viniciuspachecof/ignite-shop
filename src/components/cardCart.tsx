import { CartContext } from '@/contexts/CartContext';
import { IProduct } from '@/interface/IProduct.ts';
import { ContainerCardCart, ImageContainer } from '@/styles/components/cardCart';
import Image from 'next/image';
import { useContext } from 'react';

interface CardCartProps {
  product: IProduct;
}

export function CardCart({ product }: CardCartProps) {
  const { onRemoverProduct } = useContext(CartContext);

  function handlerRemoveProductCart(product: IProduct) {
    onRemoverProduct(product);
  }

  return (
    <ContainerCardCart>
      <ImageContainer>
        <Image src={product.imageUrl} alt="" width={91} height={91} />
      </ImageContainer>
      <div className="dados-pedido">
        <p className="titulo-pedido">{product.name}</p>
        <p className="preco-pedido">{product.price}</p>
        <button className="remover-pedido" onClick={() => handlerRemoveProductCart(product)}>
          Remover
        </button>
      </div>
    </ContainerCardCart>
  );
}
