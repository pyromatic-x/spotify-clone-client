import { Tooltip } from '@mui/material';
import { StyledIconButton } from './styled';
import { SvgIconComponent } from '@mui/icons-material';

type IProps = {
  tooltip: string;
  Icon: SvgIconComponent;
  onClick?: () => void;
};

const IconWithTooltip = ({ tooltip, Icon, onClick }: IProps) => (
  <Tooltip title={tooltip} onClick={onClick}>
    <StyledIconButton disableRipple>
      <Icon color="secondary" />
    </StyledIconButton>
  </Tooltip>
);

export default IconWithTooltip;
