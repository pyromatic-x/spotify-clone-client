import { useUnit } from 'effector-react';
import { $filter, $UI, changeWidth, filter } from '../effect';
import { Grid, IconButton, Tooltip, Typography } from '@mui/material';
import { LibraryHeaderButton, LibraryHeaderContainer, LibraryHeaderIcon } from './styled';
import LibraryHeaderCategories from './Categories';
import { LibraryUIConfig } from '../constants';
import LibrarySearch from '../search';
import LibrarySort from '../sortAndView';
import LibraryTableHeader from './TableHeader';
import { Add as AddIcon, ArrowBack, ArrowForward } from '@mui/icons-material';
import { useState } from 'react';

const LibraryHeader = () => {
  const [libraryTooltipShown, setLibraryTooltipShown] = useState(false);
  const [resizeTooltipShown, setResizeTooltipShown] = useState(false);

  const { shadow, width } = useUnit($UI);
  const { view } = useUnit($filter);

  const { default: def, min, max } = LibraryUIConfig;

  const handleOnTitleClick = () => {
    changeWidth(width.name !== 'min' ? min : def);
    if (width.name !== 'min') filter({ search: '' });
    setLibraryTooltipShown(false);
  };

  const handleOnArrowClick = () => {
    changeWidth(width.name === 'default' ? max : def);
    setResizeTooltipShown(false);
  };

  return (
    <LibraryHeaderContainer shadow={shadow}>
      <Grid container justifyContent="space-between" wrap="nowrap">
        <Tooltip
          title={`${width.name === 'min' ? 'Expand' : 'Collapse'} Your Library`}
          open={libraryTooltipShown}
          onOpen={() => setLibraryTooltipShown(true)}
          onClose={() => setLibraryTooltipShown(false)}
        >
          <LibraryHeaderButton disableRipple onClick={handleOnTitleClick}>
            <LibraryHeaderIcon />
            {width.name !== 'min' && (
              <Typography fontWeight="bold" fontSize="1.05rem" ml={1}>
                Your Library
              </Typography>
            )}
          </LibraryHeaderButton>
        </Tooltip>
        {width.name !== 'min' && (
          <Grid container alignItems="center" width="max-content" gap={1}>
            <Tooltip title="Create a playlist or folder">
              <IconButton variant="fill-on-hover">
                <AddIcon />
              </IconButton>
            </Tooltip>
            <Tooltip
              title={width.name === 'default' ? 'Show more' : 'Show less'}
              open={resizeTooltipShown}
              onOpen={() => setResizeTooltipShown(true)}
              onClose={() => setResizeTooltipShown(false)}
            >
              <IconButton variant="fill-on-hover" onClick={handleOnArrowClick}>
                {width.name === 'default' ? <ArrowForward /> : <ArrowBack />}
              </IconButton>
            </Tooltip>
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
      {width.name === 'max' && view.type !== 'Grid' && <LibraryTableHeader />}
    </LibraryHeaderContainer>
  );
};

export default LibraryHeader;
