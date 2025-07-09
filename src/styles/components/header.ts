import { styled } from '..';

export const HeaderContainer = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
});

export const Button = styled('button', {
  position: 'relative',
  display: 'flex',
  padding: '0.5rem',
  backgroundColor: '$elements',
  border: 0,
  borderRadius: '0.375rem',
  cursor: 'pointer',

  '.cart-count': {
    position: 'absolute',
    top: '-8px',
    right: '-8px',
    backgroundColor: '$green500',
    color: '$white',
    fontSize: '12px',
    fontWeight: 'bold',
    borderRadius: '50%',
    padding: '4px 7px',
    lineHeight: 1,
  },

  variants: {
    hasProduct: {
      true: {
        svg: {
          color: '$white',
        },
      },
      false: {
        svg: {
          color: '$icon',
        },
      },
    },
  },

  defaultVariants: {
    hasProduct: false,
  },
});
