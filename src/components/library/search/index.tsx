import { Close, Search as SearchIcon } from '@mui/icons-material';
import { ClickAwayListener, InputAdornment } from '@mui/material';
import { useRef, useState } from 'react';

import { useUnit } from 'effector-react';
import { $filter, filter } from '../effect';
import { capitalizeFirstLetter } from '../../../utils/strings';
import {
  LibrarySearchContainer,
  LibrarySearchWrapper,
  StyledSearchButton,
  StyledSearchInput,
} from './styled';

function LibrarySearch({ reverse = false }: { reverse?: boolean }) {
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
      <LibrarySearchWrapper moveLeft={reverse && searchOpened}>
        <StyledSearchButton hide={!searchOpened} onClick={handleOnOpen}>
          <SearchIcon />
        </StyledSearchButton>
        <LibrarySearchContainer moveLeft={reverse && searchOpened} hide={!searchOpened}>
          <StyledSearchInput
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
      </LibrarySearchWrapper>
    </ClickAwayListener>
  );
}

export default LibrarySearch;
