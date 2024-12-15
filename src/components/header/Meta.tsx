import { Box, Grid, IconButton, SvgIconTypeMap, Tooltip } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

import { Notifications as NewIcon, Groups as FriendsIcon } from '@mui/icons-material/';
import { useUnit } from 'effector-react';
import { $USER } from '../../auth/effect';
import { StyledHeaderButton } from './styled';

const Button = ({
  title,
  Icon,
}: {
  title: string;
  Icon: OverridableComponent<SvgIconTypeMap<object, 'svg'>>;
}) => (
  <Tooltip title={title}>
    <IconButton variant="scalable" sx={{ '& svg': { fontSize: '1.2rem' } }}>
      <Icon />
    </IconButton>
  </Tooltip>
);

const HeaderMeta = () => {
  const user = useUnit($USER);

  return (
    <Grid container wrap="nowrap" width="max-content" alignItems="center" gap={1.3}>
      <Button title="What's New" Icon={NewIcon} />
      <Button title="Friend Activity" Icon={FriendsIcon} />
      <Tooltip title={user?.username}>
        <StyledHeaderButton>
          {!!user && <Box component="img" src={user?.avatar + '?w=68&h=68'} />}
        </StyledHeaderButton>
      </Tooltip>
    </Grid>
  );
};

export default HeaderMeta;
