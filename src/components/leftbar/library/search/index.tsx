import { Close, Search as SearchIcon } from '@mui/icons-material';
import { ClickAwayListener, InputAdornment } from '@mui/material';
import { useRef, useState } from 'react';
import { SearchContainer, StyledSearchButton, StyledSearchInput, Wrapper } from './styled';
import { capitalizeFirstLetter } from '../../../../utils/strings';
import { useUnit } from 'effector-react';
import { $category, $search, search } from '../../effect';

function Search({ reverse = false }: { reverse?: boolean }) {
  const category = useUnit($category);
  const searchValue = useUnit($search);

  const [searchOpened, setSeachOpened] = useState(false);

  const searchRef = useRef(null);

  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (
      searchRef.current &&
      // @ts-expect-error err
      !searchRef.current.contains(event.target) &&
      !searchValue &&
      !searchValue &&
      searchOpened
    ) {
      setSeachOpened(false);
      search('');
    }
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = event.target.value;
    search(value);
    search(value);
  };

  const handleOnOpen = () => {
    setSeachOpened(true);

    // @ts-expect-error err
    searchRef.current.firstChild.children[1].focus();
  };

  return (
    <ClickAwayListener onClickAway={handleClickOutside}>
      <Wrapper moveLeft={reverse && searchOpened}>
        <StyledSearchButton hide={!searchOpened} onClick={handleOnOpen}>
          <SearchIcon />
        </StyledSearchButton>
        <SearchContainer moveLeft={reverse && searchOpened} hide={!searchOpened}>
          <StyledSearchInput
            ref={searchRef}
            size="small"
            variant="outlined"
            type="text"
            value={searchValue ?? ''}
            onChange={handleOnChange}
            inputProps={{ maxLength: 30 }}
            placeholder={`Search in ${category ? capitalizeFirstLetter(category) : 'Library'}`}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: searchValue && (
                <InputAdornment position="end" onClick={() => search('')}>
                  <Close sx={{ fill: 'text.secondary' }} />
                </InputAdornment>
              ),
            }}
          />
        </SearchContainer>
      </Wrapper>
    </ClickAwayListener>
  );
}

export default Search;
