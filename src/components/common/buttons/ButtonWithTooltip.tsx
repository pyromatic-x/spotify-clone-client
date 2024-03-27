import { IconButton, IconButtonProps, SvgIconTypeMap, Tooltip, TooltipProps } from '@mui/material';
import { DefaultComponentProps } from '@mui/material/OverridableComponent';
import { ComponentType, useState } from 'react';

interface IProps extends IconButtonProps {
  placement?: TooltipProps['placement'];
  Icon: ComponentType<DefaultComponentProps<SvgIconTypeMap>>;
}

const ButtonWithTooltip = ({ placement = 'bottom', title, Icon, onClick, sx, ...rest }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsOpen(false);
    if (onClick) onClick(event);
  };

  const _sx = {
    width: '32px',
    height: '32px',
    color: 'secondary.main',

    '&:hover': {
      color: 'common.white',
      transform: 'scale(1.1)',
    },
    '& svg': {
      fontSize: '1.3rem',
    },

    ...sx,
  };

  return (
    <Tooltip title={title} open={isOpen} onClose={handleClose} onOpen={handleOpen} placement={placement}>
      <IconButton sx={_sx} onClick={handleOnClick} {...rest}>
        <Icon />
      </IconButton>
    </Tooltip>
  );
};

export default ButtonWithTooltip;
