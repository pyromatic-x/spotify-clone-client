import { FormatListBulleted } from '@mui/icons-material';
import { useUnit } from 'effector-react';
import { Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { LibrarySortings } from '../types';
import { $sort, changeSort } from '../effect';
import Popover from '../../common/popover';
import { StyledSortButton } from './styled';
import { StyledPopoverItem } from '../../common/popover/styled';

const LibrarySort = () => {
  const sort = useUnit($sort);

  return (
    <Popover
      vertical="bottom"
      horizontal="right"
      toggler={
        <StyledSortButton disableRipple endIcon={<FormatListBulleted />} color="secondary">
          {sort}
        </StyledSortButton>
      }
      content={
        <>
          <StyledPopoverItem disabled>
            <Typography>Sort by</Typography>
          </StyledPopoverItem>
          {Object.values(LibrarySortings)
            .filter((t) => typeof t === 'string')
            .map((t: any) => (
              <StyledPopoverItem onClick={() => changeSort(t)} key={t}>
                <Typography color={sort === t ? 'green' : 'white'}>{t}</Typography>
                {sort === t && <CheckIcon color="green" />}
              </StyledPopoverItem>
            ))}
        </>
      }
      sx={{ top: '10px', left: '-175px !important' }}
    />
  );
};

export default LibrarySort;
