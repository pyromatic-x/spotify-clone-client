import { Slider, styled } from '@mui/material';

export const StyledSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.common.white,
  height: 4,
  '&:hover .MuiSlider-thumb': {
    opacity: 1,
  },
  '&:hover .MuiSlider-track': {
    backgroundColor: theme.palette.green,
    transition: 'none',
  },
  '& .MuiSlider-rail': {
    opacity: 1,
    backgroundColor: theme.palette.background.slider,
  },
  '& .MuiSlider-track': {
    backgroundColor: theme.palette.common.white,
    border: 'none',
    transition: 'none',
  },
  '& .MuiSlider-thumb': {
    opacity: 0,
    width: 12,
    height: 12,
    transition: 'none',
    '&:hover, &.Mui-focusVisible': {
      backgroundColor: theme.palette.common.white,
      boxShadow: 'none',
    },
    '&::after': {
      width: '18px',
      height: '18px',
    },
  },
}));
