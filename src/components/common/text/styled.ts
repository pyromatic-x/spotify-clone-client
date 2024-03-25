import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { Link as MUILInk } from 'react-router-dom';

export const TextTruncated = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'lines',
})<{ lines?: number }>(({ lines = 2 }) => ({
  display: '-webkit-box',
  WebkitLineClamp: lines,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
}));

export const Link = styled(MUILInk)({
  display: '-webkit-box',
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textDecoration: 'none',
  color: 'inherit',

  '&:hover': {
    textDecoration: 'underline',
  },
});
