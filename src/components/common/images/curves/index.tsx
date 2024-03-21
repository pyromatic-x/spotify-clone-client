import { StyledLogo, StyledTypography } from './styled';
import { CurveOne } from './Curves';

type IProps = {
  color: string;
  size: number;
  title: string;
  isColorBright: boolean;
  loaded: boolean;
};

export const Curves = ({ color, size, title, loaded, isColorBright }: IProps) => {
  return (
    <>
      <CurveOne color={color} loaded={loaded} size={size} />
      <StyledLogo size="10%" isColorBright={isColorBright} />
      <StyledTypography isColorBright={isColorBright}>{title}</StyledTypography>
    </>
  );
};

export default Curves;
