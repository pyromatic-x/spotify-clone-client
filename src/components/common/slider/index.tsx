import { SliderProps } from '@mui/material';
import { StyledSlider } from './styled';
import { forwardRef } from 'react';

interface IProps extends SliderProps {}

const Slider = forwardRef((props: IProps, ref) => {
  return <StyledSlider defaultValue={0} min={0} {...props} ref={ref as React.RefObject<HTMLDivElement>} />;
});

export default Slider;
