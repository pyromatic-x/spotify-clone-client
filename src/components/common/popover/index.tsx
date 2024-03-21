import { List, Popover as PopoverMUI, SxProps } from '@mui/material';
import { ReactElement, cloneElement, useState } from 'react';
import { PopoverContent } from './styled';

interface IProps {
  content: string | JSX.Element | JSX.Element[] | ReactElement;
  toggler: ReactElement;
  horizontal: number | 'center' | 'left' | 'right';
  vertical: number | 'center' | 'bottom' | 'top';
  sx?: SxProps;
}

const Popover = ({ content, toggler, horizontal, vertical, sx }: IProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const open = Boolean(anchorEl);
  const id = open ? crypto.randomUUID() : undefined;

  const Toggler = cloneElement(toggler, { onClick: handleClick });

  return (
    <>
      {Toggler}
      <PopoverMUI
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: vertical || 'bottom',
          horizontal: horizontal || 'left',
        }}
        sx={{ ...sx }}
      >
        <PopoverContent>
          <List disablePadding sx={{ minWidth: '180px' }}>
            {content}
          </List>
        </PopoverContent>
      </PopoverMUI>
    </>
  );
};

export default Popover;
