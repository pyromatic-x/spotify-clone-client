import { LinesContainer, StyledLines, StyledLogo, StyledTypography } from './styled';

type IProps = {
  color: string;
  title: string;
  loaded: boolean;
};

const Lines = ({ title, loaded, color }: IProps) => {
  return (
    <LinesContainer loaded={loaded}>
      <StyledLogo size="20px" />
      <StyledLines color={color} />
      <StyledTypography>{title}</StyledTypography>
    </LinesContainer>
  );
};

export default Lines;
