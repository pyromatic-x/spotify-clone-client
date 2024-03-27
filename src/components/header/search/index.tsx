import { CallToAction, CallToActionOutlined, Close, Search as SearchIcon } from '@mui/icons-material';
import { InputAdornment, Tooltip } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Divider, StyledInput } from './styled';

const Search = () => {
  const [value, setValue] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  const isSearchPage = location.pathname === '/search';

  useEffect(() => {
    if (!isSearchPage) setValue('');
  }, [location.pathname]);

  const handleOnClick = () => {
    if (!isSearchPage) navigate('/search');
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
      onChange={(e) => setValue(e.target.value)}
      onClick={handleOnClick}
      startAdornment={
        <InputAdornment position="start">
          <Tooltip title="Search">
            <SearchIcon />
          </Tooltip>
        </InputAdornment>
      }
      endAdornment={
        <InputAdornment position="end" onClick={() => setValue('')} color={EndAdormentColor}>
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
