import { ContainerCart } from '@/styles/components/cart';
import { XIcon } from '@phosphor-icons/react';
import { CardCart } from './CardCart';
import { useContext, useState } from 'react';
import { CartContext } from '@/contexts/CartContext';
import axios from 'axios';

interface CartProps {
  displayCart: boolean;
  onDisplayCart: (value: boolean) => void;
}

export function Cart({ displayCart, onDisplayCart }: CartProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);
  const { products } = useContext(CartContext);

  async function handleFinishProducts() {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post('/api/checkout', {
        productsFinish: products.map((product) => {
          return {
            price: product.defaultPriceId,
            quantity: 1,
          };
        }),
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setIsCreatingCheckoutSession(false);

      alert('Falha ao redirecionar ao checkout');
    }
  }

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

          <button disabled={isCreatingCheckoutSession} onClick={handleFinishProducts}>
            Finalizar Compra
          </button>
        </div>
      </div>
    </ContainerCart>
  );
}
