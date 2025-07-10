import { styled } from '..';

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4,
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    fontSize: '$lg',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$grenn300',
    },
  },

  '> img': {
    marginBottom: '20px',
  },
});

export const ImageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'nowrap',
  padding: '40px',
});

export const ImageProduct = styled('div', {
  width: '140px',
  height: '140px',
  borderRadius: '50%',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  transition: 'transform 0.3s ease',
  boxShadow: '0px 0px 5px 1px rgba(0,0,0,0.50)',

  '&:not(:first-child)': {
    marginLeft: '-60px',
  },

  img: {
    maxWidth: '90%',
    maxHeight: '90%',
    objectFit: 'contain',
  },
});
