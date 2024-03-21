import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const TextTruncated = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'lines',
})<{ lines?: number }>(({ lines = 2 }) => ({
  display: '-webkit-box',
  WebkitLineClamp: lines,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
}));
