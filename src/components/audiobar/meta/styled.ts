import { styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)({
  display: '-webkit-box',
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  maxWidth: '15vw',
  textDecoration: 'none',

  '&:hover': {
    textDecoration: 'underline',
  },
});

export const Name = styled(StyledLink)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '14px',
}));
export const Authors = styled(StyledLink)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: '12px',
  display: 'block',
}));

export const Cover = styled('img')({ height: 54, width: 54, borderRadius: 2 });
