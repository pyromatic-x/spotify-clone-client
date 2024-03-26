import { Typography, TypographyProps } from '@mui/material';
import { ReactElement } from 'react';
import { Link as RouterLink } from 'react-router-dom';

type IProps = {
  to: string;
  color?: string;
  children: JSX.Element | ReactElement | string | null;
};

const sx = {
  textDecoration: 'none',
  color: 'inherit',

  '&:hover': {
    textDecoration: 'underline',
  },
};

const Link = ({ to = '', color = 'white', children, ...rest }: TypographyProps & IProps) => {
  return (
    <Typography
      component={RouterLink}
      to={to}
      color={color}
      fontSize={rest.fontSize || 'inherit'}
      sx={sx}
      {...rest}
    >
      {children}
    </Typography>
  );
};

export default Link;
