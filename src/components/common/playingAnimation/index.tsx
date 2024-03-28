import { Box, BoxProps } from '@mui/material';
import { AnimationLine } from './styled';

interface IProps extends BoxProps {
  width?: string;
  height?: string;
  gap?: string;
}

const PlayingAnimation = ({ width = '15px', height = '18px', gap = '1px', ...rest }: IProps) => (
  <Box
    component="div"
    sx={{
      display: 'flex',
      width,
      height,
      gap,
      transform: 'rotate(180deg)',
      ...rest.sx,
    }}
    {...rest}
  >
    <AnimationLine animation="first" />
    <AnimationLine animation="second" />
    <AnimationLine animation="third" />
    <AnimationLine animation="fourth" />
  </Box>
);

export default PlayingAnimation;
