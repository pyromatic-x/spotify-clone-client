import { Tooltip } from '@mui/material';
import { StyledIconButton } from './styled';
import { SvgIconComponent } from '@mui/icons-material';

type IProps = {
  tooltip: string;
  active?: boolean;
  Icon: SvgIconComponent;
  onClick?: (event: any) => unknown;
};

const IconWithTooltip = ({ tooltip, active, Icon, onClick }: IProps) => (
  <Tooltip title={tooltip} onClick={onClick}>
    <StyledIconButton disableRipple active={active}>
      <Icon />
    </StyledIconButton>
  </Tooltip>
);

export default IconWithTooltip;
