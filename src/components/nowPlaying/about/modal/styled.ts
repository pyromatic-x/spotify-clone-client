import { Box, Dialog, IconButton, styled } from '@mui/material';
import Link from '../../../common/text/Link';

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: theme.palette.background.section,
    backgroundImage: 'none',
    borderRadius: '8px',
    width: '100%',
    maxWidth: '700px',
    maxHeight: '68vh',
    perspective: '1px',
  },
}));
export const DialogImageWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  height: '350px',
  backgroundColor: theme.palette.common.black,

  '& img': {
    height: '100%',
    objectFit: 'contain',
  },
}));

export const DialogStyledSocialLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',

  '& > *': {
    color: theme.palette.secondary.main,
  },
  '& p': {
    fontSize: '0.8rem',
    dispay: 'inline',
  },

  '&:hover > *': {
    color: theme.palette.common.white,
  },
}));

export const CloseIconWrapper = styled(IconButton)(({ theme }) => ({
  position: 'fixed',
  top: '8px',
  right: '8px',

  '& .MuiSvgIcon-root': {
    width: '1.2rem',
    height: '1.2rem',
    color: theme.palette.secondary.main,
  },
}));
