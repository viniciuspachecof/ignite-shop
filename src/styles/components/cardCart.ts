import { styled } from '..';

export const ContainerCardCart = styled('div', {
  display: 'flex',
  gap: '1.25rem',
  alignItems: 'center',
  marginBottom: '1.5rem',

  'div.dados-pedido': {
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

      transition: 'color 0.1s',

      '&:hover': {
        color: '$green300',
      },
    },
  },
});

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 102,
  height: 91,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
});
