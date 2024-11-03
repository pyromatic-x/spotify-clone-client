import { Close, Search as SearchIcon } from '@mui/icons-material';
import { ClickAwayListener, InputAdornment } from '@mui/material';
import { useRef, useState } from 'react';

import { useUnit } from 'effector-react';
import { $filter, filter } from '../effect';
import { capitalizeFirstLetter } from '../../../utils/strings';
import { LibrarySearchContainer, StyledSearchButton, StyledSearchInput } from './styled';

function LibrarySearch({ direction = 'openToRight' }: { direction?: 'openToRight' | 'openToLeft' }) {
  const { search, category } = useUnit($filter);

  const [searchOpened, setSeachOpened] = useState(false);

  const searchRef = useRef(null);

  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (
      searchRef.current &&
      // @ts-expect-error err
      !searchRef.current.contains(event.target) &&
      !search &&
      !search &&
      searchOpened
    ) {
      setSeachOpened(false);
      filter({ search: '' });
    }
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    filter({ search: event.target.value });
  };

  const handleOnOpen = () => {
    setSeachOpened(true);

    // @ts-expect-error err
    searchRef.current.firstChild.children[1].focus();
  };

  return (
    <ClickAwayListener onClickAway={handleClickOutside}>
      <LibrarySearchContainer moveToLeft={direction === 'openToLeft' && searchOpened}>
        <StyledSearchButton onClick={handleOnOpen} disableTouchRipple>
          <SearchIcon />
        </StyledSearchButton>
        <StyledSearchInput
          show={searchOpened}
          ref={searchRef}
          size="small"
          variant="outlined"
          type="text"
          value={search ?? ''}
          onChange={handleOnChange}
          inputProps={{ maxLength: 30 }}
          placeholder={`Search in ${category ? capitalizeFirstLetter(category) : 'Your Library'}`}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: search && (
              <InputAdornment position="end" onClick={() => filter({ search: '' })}>
                <Close sx={{ fill: 'text.secondary' }} />
              </InputAdornment>
            ),
          }}
        />
      </LibrarySearchContainer>
    </ClickAwayListener>
  );
}

export default LibrarySearch;
