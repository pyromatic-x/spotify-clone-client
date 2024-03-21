import { PlayArrow } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const PlayButton = ({ sx = {}, className = '' }) => (
  <IconButton
    className={className}
    disableRipple
    sx={{
      ...{
        color: 'black',
        backgroundColor: 'green.main',
        opacity: '0',
        transition: 'opacity 0.3s ease',
        fontSize: '2rem',
        boxShadow: '0px 4px 10px 0px rgba(0,0,0, 0.7)',
        '&:hover': {
          transform: 'scale(1.05) translateY(0px) translateX(0px)',
        },
      },
      ...sx,
    }}
  >
    <PlayArrow sx={{ fontSize: '2rem' }} color="black" />
  </IconButton>
);

export default PlayButton;
