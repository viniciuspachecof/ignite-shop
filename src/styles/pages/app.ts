import { styled } from '..';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
});

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
});

export const Button = styled('button', {
  display: 'flex',
  padding: '0.5rem',
  backgroundColor: '$elements',
  border: 0,
  borderRadius: '0.375rem',
  cursor: 'pointer',

  svg: {
    color: '$icon',
  },
});

export const ContainerCarrinho = styled('div', {
  width: '480px',
  height: '100vh',
  backgroundColor: '$elements',
  position: 'fixed',
  top: 0,
  right: 0,
  transition: 'transform 0.3s ease-in-out',
  zIndex: 1000,
  padding: '1.5rem',

  variants: {
    open: {
      true: {
        transform: 'translateX(0%)',
        boxShadow: '-5px 0px 18px rgba(0, 0, 0, 0.75)',
      },
      false: {
        transform: 'translateX(100%)',
      },
    },
  },

  defaultVariants: {
    open: false,
  },

  'div.close': {
    display: 'flex',
    justifyContent: 'flex-end',

    button: {
      backgroundColor: 'transparent',
      border: 0,
      cursor: 'pointer',
      display: 'flex',

      svg: {
        color: '$white',
      },
    },
  },

  'div.info-geral': {
    padding: '3rem',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',

    'div.lista-pedido': {
      height: '100%',

      p: {
        fontSize: '$lg',
        fontWeight: 'bold',
      },
    },

    'div.total-pedido': {},
  },
});
