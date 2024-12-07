import { useUnit } from 'effector-react';
import { $filter } from '../effect';
import { memo, useRef, useState } from 'react';
import { ClickAwayListener, Popover, Typography } from '@mui/material';
import { ViewIcons } from '../constants';
import { StyledSortAndViewButton } from './styled';
import PopoverList from '../../popover/list';
import { LibrarySortings } from '../types';
import { getSortAndViewItems } from './constants';

const LibrarySortAndView = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { sort, view } = useUnit($filter);

  const anchor = useRef(null);

  const ViewIcon = ViewIcons[view.type];

  const handleOnClickAway = (e: MouseEvent | TouchEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest('#sort-and-view-popover')) setIsOpen(false);
  };

  return (
    <>
      <ClickAwayListener onClickAway={handleOnClickAway}>
        <StyledSortAndViewButton disableRipple onClick={() => setIsOpen(true)} ref={anchor}>
          <Typography mr={0.6} fontSize="0.9rem">
            {LibrarySortings[sort]}
          </Typography>
          <ViewIcon />
        </StyledSortAndViewButton>
      </ClickAwayListener>

      <Popover
        open={isOpen}
        anchorEl={anchor.current}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        slotProps={{
          paper: {
            id: 'sort-and-view-popover',
          },
        }}
      >
        <PopoverList items={getSortAndViewItems({ sort, view: view.type })} />
      </Popover>
    </>
  );
};

export default memo(LibrarySortAndView);
