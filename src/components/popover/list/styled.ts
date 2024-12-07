import { Box, styled } from '@mui/material';

export const StyledPopoverItem = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'active' && prop !== 'disabled',
})<{ active?: boolean; disabled?: boolean }>(({ theme, active, disabled }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '12px 14px',
  borderRadius: '2px',
  height: '38px',

  ...(!disabled
    ? {
        '&: hover': {
          backgroundColor: theme.palette.hover.secondary,
        },
      }
    : {
        color: theme.palette.secondary.main,
        fill: theme.palette.secondary.main,
      }),

  ...(active && {
    color: theme.palette.primary.main,
  }),
}));

export const StyledPopoverDivider = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '1px',
  backgroundColor: theme.palette.hover.secondary,
}));
