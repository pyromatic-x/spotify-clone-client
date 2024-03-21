import { Box, styled } from '@mui/material';

export const StyledBackground = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'bgColor',
})<{ bgColor: string }>(({ bgColor }) => ({
  position: 'absolute',
  left: '0',
  height: '300px',
  transition: 'background 0.5s ease-in-out',
  borderRadius: '8px',
  pointerEvents: 'none',
  background: bgColor,
  width: 'calc(100% + 28px)',
  margin: '0 -14px',
  borderTopRightRadius: '8px',
  borderTopLeftRadius: '8px',

  '&::before': {
    content: "''",
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderTopRightRadius: '8px',
    borderTopLeftRadius: '8px',
    background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(18,18,18,1) 100%)',
  },
}));
