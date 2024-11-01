import { Box, Paper, styled } from '@mui/material';

export const Container = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'template',
})<{ template: string }>(({ template }) => ({
  maxWidth: '1920px',
  display: 'grid',
  gap: '2rem',
  gridTemplateColumns: 'auto 1fr',
  gridTemplateAreas: template,
}));

export const TopResultContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.hover.card,
  padding: '20px',
  borderRadius: '8px',
  transition: '0.25s ease',
  cursor: 'pointer',
  width: '400px',
  position: 'relative',

  '&:hover': {
    backgroundColor: theme.palette.hover.track,

    '& .top-result-play-button': {
      opacity: '1',
    },
  },
}));

export const TopResultAvatarContainer = styled(Paper)(({}) => ({
  width: '90px',
  height: '90px',
  marginBottom: '2rem',
  borderRadius: '50%',

  '& .MuiAvatar-root': {
    width: '90px',
    height: '90px',
  },
}));
