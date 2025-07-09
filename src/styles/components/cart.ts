import { styled } from '..';

export const ContainerCart = styled('div', {
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
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',

    '>p': {
      fontSize: '$lg',
      fontWeight: 'bold',
      marginBottom: '2.5rem',
    },

    'div.lista-pedido': {
      height: '100%',
      overflow: 'auto',
    },

    'div.total-pedido': {
      marginTop: '1.5rem',
    },
  },

  'div.total-pedido': {
    div: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '0.625rem',
      alignItems: 'center',

      p: {
        fontSize: '$md',
        color: '$gray100',
      },
    },

    button: {
      width: '100%',
      border: 0,
      backgroundColor: '$green500',
      color: '$white',
      padding: '1.25rem',
      fontWeight: 'bold',
      fontSize: '$md',
      borderRadius: '0.5rem',
      margin: '3.5rem 0 1.5rem',
      cursor: 'pointer',
      transition: 'background-color 0.1s',

      '&:hover': {
        backgroundColor: '$green300',
      },
    },
  },
});
