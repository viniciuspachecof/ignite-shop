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
