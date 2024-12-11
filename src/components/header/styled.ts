import { ButtonBase, styled } from '@mui/material';

export const StyledHeaderButton = styled(ButtonBase)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  padding: '7px',
  backgroundColor: theme.palette.hover.main,

  '& img': {
    borderRadius: '50%',
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    apsectRatio: 1,
  },

  '& svg': {
    fontSize: '1.9rem',
  },

  ':hover': {
    transform: 'scale(1.06)',
  },
}));

StyledHeaderButton.defaultProps = { disableRipple: true };
