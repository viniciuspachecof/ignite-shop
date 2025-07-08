import { styled } from '..';

export const ContainerCardCart = styled('div', {
  display: 'flex',
  gap: '1.25rem',
  alignItems: 'center',
  marginBottom: '1.5rem',

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.875rem',
    alignItems: 'flex-start',

    '.titulo-pedido': {
      fontSize: '$md',
      color: '$gray300',
    },

    '.preco-pedido': {
      fontSize: '$md',
      fontWeight: 'bold',
      color: '$gray100',
    },

    button: {
      border: 0,
      color: '$green500',
      fontWeight: 'bold',
      fontSize: '1rem',
      backgroundColor: 'transparent',
      display: 'flex',
      cursor: 'pointer',
    },
  },
});
