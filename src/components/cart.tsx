import { ContainerCarrinho } from '@/styles/pages/cart';
import { XIcon } from '@phosphor-icons/react';
import { CardCart } from './cardCart';

interface CartProps {
  displayCart: boolean;
  onDisplayCart: (value: boolean) => void;
}

export function Cart({ displayCart, onDisplayCart }: CartProps) {
  return (
    <ContainerCarrinho open={displayCart}>
      <div className="close">
        <button onClick={() => onDisplayCart(false)}>
          <XIcon size={24} weight="bold" />
        </button>
      </div>

      <div className="info-geral">
        <p>Sacola de Compras</p>
        <div className="lista-pedido">
          <CardCart title="Camiseta Beyond the Limits" value={79.9} />
          <CardCart title="Camiseta Explorer" value={62.9} />
          <CardCart title="Camiseta Ignite Lab | ReactJS" value={89.9} />
        </div>

        <div className="total-pedido">
          <div>
            <p style={{ fontSize: '1rem' }}>Quantidade</p>
            <p style={{ color: '#C4C4CC' }}>3 itens</p>
          </div>
          <div>
            <p>Valor total</p>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(270)}
            </p>
          </div>

          <button>Finalizar Compra</button>
        </div>
      </div>
    </ContainerCarrinho>
  );
}
