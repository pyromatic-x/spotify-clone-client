import { Box, Grid, Tooltip } from '@mui/material';
import { Groups, Notifications } from '@mui/icons-material';
import ButtonWithTooltip from '../../common/buttons/ButtonWithTooltip';
import { ProfileIcon } from './styled';
import Avatar from '../../../assets/images/profile_avatar.jpg';
// import { useLocation, useNavigate } from 'react-router-dom';

const HeaderRightPart = () => {
  // const navigate = useNavigate();
  // const location = useLocation();

  return (
    <Grid container alignItems="center" width="auto" flexWrap="nowrap" gap={1.2}>
      <ButtonWithTooltip Icon={Notifications} title="What's New" disableRipple />
      <ButtonWithTooltip Icon={Groups} title="What's New" disableRipple />
      <Tooltip title="Pyromatic">
        <ProfileIcon disableRipple>
          <Box
            component="img"
            src={Avatar}
            alt="pyromatic's profile picture"
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
