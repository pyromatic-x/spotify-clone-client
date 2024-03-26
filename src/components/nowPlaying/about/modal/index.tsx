import { Avatar, Box, Grid, Typography } from '@mui/material';
import { CloseIconWrapper, DialogImageWrapper, StyledDialog } from './styled';
import { useUnit } from 'effector-react';
import { $nowPlaying } from '../../effect';
import Stats from './Stats';
import { PersonOutlined } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';

type IProps = {
  open: boolean;
  onClose: () => void;
};

const AboutModal = ({ onClose, open }: IProps) => {
  const { artist } = useUnit($nowPlaying);

  return (
    <StyledDialog onClose={onClose} open={open} transitionDuration={{ enter: 400, exit: 400 }}>
      <DialogImageWrapper>
        <Box component="img" src={artist.picture} />
      </DialogImageWrapper>
      <CloseIconWrapper disableTouchRipple onClick={onClose}>
        <CloseIcon />
      </CloseIconWrapper>
      <Grid container padding="26px 34px" flexWrap="nowrap" gap="60px">
        <Stats />
        <Box>
          <Typography color="secondary" mb={4}>
            {artist.about.description}
          </Typography>
          <Grid container alignItems="center" gap={2}>
            <Avatar>
              <PersonOutlined sx={{ color: 'text.secondary' }} />
            </Avatar>
            <Typography fontSize="0.9rem" color="secondary">
              Posted By {artist.about.postedBy}
            </Typography>
          </Grid>
        </Box>
      </Grid>
    </StyledDialog>
  );
};

export default AboutModal;
