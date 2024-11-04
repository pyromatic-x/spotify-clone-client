import { useUnit } from 'effector-react';
import { $UI, changeWidth, filter } from '../effect';
import { Grid, Tooltip, Typography } from '@mui/material';
import { LibraryHeaderButton, LibraryHeaderContainer, LibraryHeaderIcon } from './styled';
import LibraryHeaderCategories from './Categories';
import { LibraryUIConfig } from '../constants';
import LibrarySearch from '../search';
import LibrarySort from '../sort';
import LibraryTableHeader from './TableHeader';

const LibraryHeader = () => {
  const { shadow, width } = useUnit($UI);

  const { default: def, min } = LibraryUIConfig;

  const handleOnTitleClick = () => {
    changeWidth(width.name !== 'min' ? min : def);
    if (width.name !== 'min') filter({ search: '' });
  };

  // const handleOnArrowClick = () => {
  //   changeWidth(width.name === 'default' ? max : def);
  // };

  return (
    <LibraryHeaderContainer shadow={shadow}>
      <Grid container justifyContent="space-between" wrap="nowrap">
        <Tooltip title={`${width.name === 'min' ? 'Expand' : 'Collapse'} Your Library`}>
          <Grid container alignItems="center" width="max-content">
            <LibraryHeaderButton disableRipple onClick={handleOnTitleClick}>
              <LibraryHeaderIcon />
              {width.name !== 'min' && (
                <Typography fontWeight="bold" fontSize="1.05rem" ml={1}>
                  Your Library
                </Typography>
              )}
            </LibraryHeaderButton>
          </Grid>
        </Tooltip>
        {width.name !== 'min' && (
          <Grid container alignItems="center" width="max-content">
            {/* <ButtonWithTooltip
              title="Create playlist or folder"
              Icon={Add}
              disableTouchRipple
              placement="top"
            />
            <ButtonWithTooltip
              disableTouchRipple
              title={width.name === 'default' ? 'Show more' : 'Show less'}
              Icon={width.name === 'default' ? ArrowMore : ArrowLess}
              onClick={handleOnArrowClick}
              placement="top"
            /> */}
          </Grid>
        )}
      </Grid>
      {width.name !== 'min' && (
        <Grid container alignItems="center" justifyContent="space-between" wrap="nowrap">
          <LibraryHeaderCategories />
          {width.name === 'max' && (
            <Grid container alignItems="center" wrap="nowrap" justifyContent="end" gap={1}>
              <LibrarySearch direction="openToLeft" />
              <LibrarySort />
            </Grid>
          )}
        </Grid>
      )}
      {width.name === 'max' && <LibraryTableHeader />}
    </LibraryHeaderContainer>
  );
};

export default LibraryHeader;
