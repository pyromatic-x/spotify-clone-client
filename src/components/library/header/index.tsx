import { useUnit } from 'effector-react';
import { $collapsed, $shadow, $width, changeWidth } from '../effect';
import { Grid, Tooltip, Typography } from '@mui/material';
import { LibraryHeaderButton, LibraryHeaderContainer, LibraryHeaderIcon } from './styled';
import { libraryUIConfig } from '../constants';
import { Add } from '@mui/icons-material';
import ButtonWithTooltip from '../../common/buttons/ButtonWithTooltip';
import { ArrowForward as ArrowMore, ArrowBack as ArrowLess } from '@mui/icons-material';
import LibraryHeaderCategories from './Categories';

const LibraryHeader = () => {
  const collapsed = useUnit($collapsed);
  const shadow = useUnit($shadow);
  const width = useUnit($width);

  const handleOnTitleClick = () => {
    changeWidth(collapsed ? libraryUIConfig.default : libraryUIConfig.collapse);
  };

  const handleOnArrowClick = () => {
    changeWidth(width > libraryUIConfig.default ? libraryUIConfig.collapse : libraryUIConfig.default);
  };

  return (
    <LibraryHeaderContainer shadow={shadow}>
      <Grid container justifyContent="space-between" wrap="nowrap">
        <Tooltip title={`${collapsed ? 'Expand' : 'Collapse'} Your Library`}>
          <Grid container alignItems="center" width="max-content">
            <LibraryHeaderButton disableRipple onClick={handleOnTitleClick}>
              <LibraryHeaderIcon />
              {!collapsed && (
                <Typography fontWeight="bold" fontSize="1.05rem" ml={1}>
                  Your Library
                </Typography>
              )}
            </LibraryHeaderButton>
          </Grid>
        </Tooltip>
        {!collapsed && (
          <Grid container alignItems="center" width="max-content">
            <ButtonWithTooltip
              title="Create playlist or folder"
              Icon={Add}
              disableTouchRipple
              placement="top"
            />
            <ButtonWithTooltip
              disableTouchRipple
              title={width > libraryUIConfig.default ? 'Show more' : 'Show less'}
              Icon={width > libraryUIConfig.default ? ArrowMore : ArrowLess}
              onClick={handleOnArrowClick}
              placement="top"
            />
          </Grid>
        )}
      </Grid>
      {!collapsed && <LibraryHeaderCategories />}
    </LibraryHeaderContainer>
  );
};

export default LibraryHeader;
