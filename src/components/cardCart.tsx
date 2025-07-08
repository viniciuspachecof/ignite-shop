import { ContainerCardCart } from '@/styles/pages/cardCart';
import Image from 'next/image';
import camisa from '../assets/camisa.png';

interface CardCartProps {
  title: string;
  value: number;
}

export function CardCart({ title, value }: CardCartProps) {
  return (
    <ContainerCardCart>
      <div>
        <Image src={camisa} alt="" />
      </div>
      <div>
        <p className="titulo-pedido">{title}</p>
        <p className="preco-pedido">
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(value)}
        </p>
        <button className="remover-pedido">Remover</button>
      </div>
    </ContainerCardCart>
  );
}
