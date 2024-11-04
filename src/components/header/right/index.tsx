import { Box, Grid, Tooltip } from '@mui/material';
import { ProfileIcon } from './styled';
import Avatar from '../../../assets/images/profile_avatar.jpg';
import { useUnit } from 'effector-react';
import { $USER } from '../../root/effect';
// import { useLocation, useNavigate } from 'react-router-dom';

const HeaderRightPart = () => {
  const user = useUnit($USER);

  return (
    <Grid container alignItems="center" width="auto" flexWrap="nowrap" gap={1.2}>
      {/* <ButtonWithTooltip Icon={Notifications} title="What's New" disableRipple /> */}
      {/* <ButtonWithTooltip Icon={Groups} title="What's New" disableRipple /> */}
      <Tooltip title={user?.username}>
        <ProfileIcon disableRipple>
          <Box
            component="img"
            src={Avatar}
            alt={`${user?.username}'s profile picture`}
            width="32px"
            height="32px"
            borderRadius="50%"
          />
        </ProfileIcon>
      </Tooltip>
    </Grid>
  );
};

export default HeaderRightPart;
