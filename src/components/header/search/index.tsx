import { CallToAction, CallToActionOutlined, Close, Search as SearchIcon } from '@mui/icons-material';
import { InputAdornment, Tooltip } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { Divider, StyledInput } from './styled';
import { clearSearchResults, search } from '../../../pages/browse/effect';

const Search = () => {
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();
  const location = useLocation();

  const isSearchPage = location.pathname === '/search';

  useEffect(() => {
    const q = searchParams.get('q');

    if (!!q && value !== q) {
      setValue(searchParams.get('q') ?? '');
      search(q ?? '');
    }
  }, [location.search, value]);

  useEffect(() => {
    if (!isSearchPage) {
      setValue('');
      clearSearchResults();
    }
  }, [location.pathname]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const val = event.target.value;

    setValue(event.target.value);
    setSearchParams({ q: val });
    search(val);
  };

  const handleOnClick = () => !isSearchPage && navigate('/search');

  const handleOnAdornmentClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();

    if (!isSearchPage) navigate('/search');
    else {
      setValue('');
      clearSearchResults();
      setSearchParams({});
    }
  };

  let EndAdormentIcon = CallToActionOutlined;
  if (!!value) EndAdormentIcon = Close;
  else if (isSearchPage) EndAdormentIcon = CallToAction;

  let EndAdormentColor = 'secondary.main';
  if (!!value || !isSearchPage) EndAdormentColor = 'common.white';

  let endAdormentTooltip = 'Browse';
  if (!!value) endAdormentTooltip = 'Clear search field';

  return (
    <StyledInput
      placeholder="What do you want to play?"
      autoFocus={location.pathname === '/search'}
      value={value}
      onChange={handleOnChange}
      onClick={handleOnClick}
      startAdornment={
        <InputAdornment position="start">
          <Tooltip title="Search">
            <SearchIcon />
          </Tooltip>
        </InputAdornment>
      }
      endAdornment={
        <InputAdornment position="end" onClick={handleOnAdornmentClick} color={EndAdormentColor}>
          {!value && <Divider />}
          <Tooltip title={endAdormentTooltip}>
            <EndAdormentIcon
              sx={(theme) => ({
                color: isSearchPage && !value ? theme.palette.common.white : theme.palette.secondary.main,
              })}
            />
          </Tooltip>
        </InputAdornment>
      }
    />
  );
};

export default Search;
