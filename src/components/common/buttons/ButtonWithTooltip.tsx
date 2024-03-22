import { IconButton, IconButtonProps, SvgIconTypeMap, Tooltip } from '@mui/material';
import { DefaultComponentProps } from '@mui/material/OverridableComponent';
import { ComponentType, useState } from 'react';

interface IProps extends IconButtonProps {
  title: string;
  Icon: ComponentType<DefaultComponentProps<SvgIconTypeMap>>;
}

const ButtonWithTooltip = ({ title, Icon, ...rest }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsOpen(false);
    if (rest.onClick) rest.onClick(event);
  };

  return (
    <Tooltip title={title} open={isOpen} onClose={handleClose} onOpen={handleOpen}>
      <IconButton
        sx={{
          width: '32px',
          height: '32px',
          color: 'secondary.main',
          transition: '0.2s ease',
          '&:hover': {
            color: 'white',
          },
          '& svg': {
            fontSize: '1.3rem',
          },
        }}
        onClick={handleOnClick}
      >
        <Icon />
      </IconButton>
    </Tooltip>
  );
};

export default ButtonWithTooltip;
