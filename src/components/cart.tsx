import { ContainerCart } from '@/styles/components/cart';
import { XIcon } from '@phosphor-icons/react';
import { CardCart } from './CardCart';
import { useContext } from 'react';
import { CartContext } from '@/contexts/CartContext';

interface CartProps {
  displayCart: boolean;
  onDisplayCart: (value: boolean) => void;
}

export function Cart({ displayCart, onDisplayCart }: CartProps) {
  const { products } = useContext(CartContext);

  console.log(products);

  return (
    <ContainerCart open={displayCart}>
      <div className="close">
        <button onClick={() => onDisplayCart(false)}>
          <XIcon size={24} weight="bold" />
        </button>
      </div>

      <div className="info-geral">
        <p>Sacola de Compras</p>
        <div className="lista-pedido">
          {products.map((product) => (
            <CardCart key={product.id} product={product} />
          ))}
        </div>

        <div className="total-pedido">
          <div>
            <p style={{ fontSize: '1rem' }}>Quantidade</p>
            <p style={{ color: '#C4C4CC' }}>
              {products.length === 1 ? `${products.length} item` : `${products.length} itens`}
            </p>
          </div>
          <div>
            <p>Valor total</p>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(products.reduce((soma, product) => soma + product.priceToTotal, 0))}
            </p>
          </div>

          <button>Finalizar Compra</button>
        </div>
      </div>
    </ContainerCart>
  );
}
