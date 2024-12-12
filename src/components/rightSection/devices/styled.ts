import { Box, styled } from '@mui/material';
import { hexToRgbA } from '../../../utils/strings';

export const CurrentDeviceContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#181818',
  borderRadius: '8px',
  padding: '14px 12px',
  position: 'relative',
  overflow: 'hidden',

  '::after': {
    content: "''",
    position: 'absolute',
    top: '-40%',
    left: '10%',
    borderRadius: '50%',
    width: '80%',
    height: '80%',
    backgroundColor: hexToRgbA(theme.palette.primary.main, 0.3),
    filter: 'blur(50px)',
  },
}));

export const StyledExternalLink = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '14px 12px',
  borderRadius: '8px',
  cursor: 'pointer',

  ':hover': {
    backgroundColor: theme.palette.hover.main,

    '& a': {
      textDecoration: 'underline',
    },
  },
}));
