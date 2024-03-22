import { Grid, Tooltip } from '@mui/material';
import { LibraryButton, LibraryIcon } from '../styled';
import { ArrowForward as ArrowForwardIcon, ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import ButtonWithTooltip from '../../../../common/buttons/ButtonWithTooltip';
import { $expanded, changeMenuWidth } from '../../../effect';
import { menuConfig } from '../../../constants';
import Categories from '../categories';
import { useUnit } from 'effector-react';
import Filters from '../../sort';
import Search from '../../search';
import ExpandedRow from '../../expandedRow';
import NewButton from './NewButton';

const Full = () => {
  const expanded = useUnit($expanded);

  return (
    <>
      <Grid container alignItems="center" justifyContent="space-between" wrap="nowrap" paddingLeft="10px">
        <Tooltip title="Collapse Your Library">
          <LibraryButton
            disableRipple
            startIcon={<LibraryIcon />}
            onClick={() => changeMenuWidth(menuConfig.minWidth)}
          >
            Your Library
          </LibraryButton>
        </Tooltip>
        <Grid container columnGap={1} width="max-content">
          <NewButton />
          {expanded ? (
            <ButtonWithTooltip
              title="Show less"
              Icon={ArrowBackIcon}
              onClick={() => changeMenuWidth(menuConfig.defaultWidth)}
            />
          ) : (
            <ButtonWithTooltip
              title="Show more"
              Icon={ArrowForwardIcon}
              onClick={() => changeMenuWidth(menuConfig.expandedViewBreakpoint)}
            />
          )}
        </Grid>
      </Grid>
      <Grid container justifyContent="space-between" alignItems="center" flexWrap="nowrap">
        <Categories />
        {expanded && (
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            flexWrap="nowrap"
            width="auto"
            gap={1}
          >
            <Search reverse />
            <Filters />
          </Grid>
        )}
      </Grid>
      {expanded && <ExpandedRow />}
    </>
  );
};

export default Full;
