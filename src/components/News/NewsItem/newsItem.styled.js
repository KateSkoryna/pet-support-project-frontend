import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
// import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import { CardActions } from '@mui/material';

export const NewsTitle = styled(Typography)({
  fontSize: '24px',
  textAlign: 'start',
  fontWeight: '700',
  paddingLeft: '16px',
  paddingTop: '4px',
});

export const NewsText = styled(Typography)({
  fontSize: '16px',
  textAlign: 'start',
  fontWeight: '400',
  color: '#111321',
  paddingBottom: '8px',
  position: 'relative',
});

export const Rectangle = styled(Skeleton)({
  height: '8px',
  borderRadius: '40px',
  background: 'linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%)',
});

export const NewsDate = styled(Typography)({
  display: 'block',
  fontSize: '16px',
  fontWeight: '400',
  color: '#111111',
});

export const CardFooter = styled(CardActions)({
  justifyContent: 'space-between',
});

export const NewsLink = styled(Link)({
  color: '#F59256',
});
