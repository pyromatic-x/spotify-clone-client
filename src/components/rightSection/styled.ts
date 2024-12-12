import { Box, Grid, styled } from '@mui/material';

export const StyledRightSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  minWidth: '400px',
  maxWidth: '400px',
  height: '100%',
  backgroundColor: theme.palette.background.main,
  padding: '0 8px 8px 8px',
  borderRadius: '8px',
  overflow: 'scroll',
}));

export const RightSectionHeaderContainer = styled(Grid, {
  shouldForwardProp: (prop) => prop !== 'showHeaderShadow',
})<{ showHeaderShadow: boolean }>(({ theme, showHeaderShadow }) => ({
  position: 'sticky',
  top: 0,
  left: 0,
  width: 'calc(100% + 16px)',
  margin: '0 -8px',
  padding: '8px 8px 0 8px',
  height: '56px',
  backgroundColor: theme.palette.background.main,
  zIndex: 1,

  ...(showHeaderShadow && {
    boxShadow: '0 9px 14px -4px rgba(0, 0, 0, 1)',
  }),
}));

RightSectionHeaderContainer.defaultProps = {
  container: true,
  alignItems: 'center',
  justifyContent: 'space-between',
};
