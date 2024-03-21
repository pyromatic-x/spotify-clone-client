import { Typography } from '@mui/material';
import ButtonWithTooltip from '../../../../common/buttons/ButtonWithTooltip';
import { Add, PlaylistAdd, FolderOpen } from '@mui/icons-material';
import { StyledPopoverItem } from '../../../../common/popover/styled';
import Popover from '../../../../common/popover';

const NewButton = () => {
  return (
    <Popover
      vertical="bottom"
      horizontal="left"
      toggler={<ButtonWithTooltip title="Create playlist or folder" Icon={Add} />}
      content={
        <>
          <StyledPopoverItem sx={{ gap: '10px', justifyContent: 'flex-start' }}>
            <PlaylistAdd />
            <Typography>Create a new playlist</Typography>
          </StyledPopoverItem>
          <StyledPopoverItem sx={{ gap: '10px' }}>
            <FolderOpen />
            <Typography>Create a playlist folder</Typography>
          </StyledPopoverItem>
        </>
      }
    />
  );
};

export default NewButton;
