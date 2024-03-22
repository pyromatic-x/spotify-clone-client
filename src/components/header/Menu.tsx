import { Grid, IconButton, SvgIconTypeMap, Tooltip } from '@mui/material';
import { Notifications, Groups, Person } from '@mui/icons-material';
import { ComponentType } from 'react';
import { DefaultComponentProps } from '@mui/material/OverridableComponent';

const Btn = ({
  Icon,
  title,
}: {
  Icon: ComponentType<DefaultComponentProps<SvgIconTypeMap>>;
  title: string;
}) => {
  return (
    <Tooltip title={title} placement="top">
      <IconButton
        sx={{
          width: '30px',
          height: '30px',
          padding: '4px',
          fontSize: '1.1rem',
          backgroundColor: 'rgba(0,0,0,0.5)',
          '&:hover': {
            transform: 'scale(1.1)',
            '& svg': {
              fill: 'white',
            },
          },
        }}
        disableRipple
      >
        <Icon color="secondary" width="100%" height="100%" fontSize="inherit" />
      </IconButton>
    </Tooltip>
  );
};

export default function Menu() {
  return (
    <Grid container position="relative" width="100%" justifyContent="flex-end" columnGap={1} gridArea="menu">
      <Btn Icon={Notifications} title="What's New" />
      <Btn Icon={Groups} title="Friend Activity" />
      <Btn Icon={Person} title="Profile" />
    </Grid>
  );
}
