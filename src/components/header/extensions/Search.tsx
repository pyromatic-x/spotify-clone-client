import { Cancel, Search as SearchIcon } from '@mui/icons-material';
import { FormControl, InputAdornment, styled, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleLoading } from '../../../store/reducers/browseSlice';

const StyledTextField = styled(TextField)({
  '& .MuiInputBase-root': {
    height: '46px',
    fontSize: '0.9rem',
    width: '30vw',
    minWidth: '260px',
    borderRadius: '25px',
    position: 'absolute',
    top: '-23px',
    left: '0',
  },
});

function Search() {
  const dispatch = useDispatch();

  const [value, setValue] = useState('');

  function onChangeHandler(value: string) {
    dispatch(toggleLoading(!!value));
    setValue(value);
  }

  return (
    <FormControl sx={{ position: 'relative', top: '10px' }}>
      <StyledTextField
        sx={{ '& .MuiInputBase-root': { backgroundColor: 'secondary.light' } }}
        placeholder="What do you want to listen to?"
        autoFocus
        value={value}
        onChange={(e) => onChangeHandler(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: 'secondary.main' }} />
            </InputAdornment>
          ),
          endAdornment: value && (
            <InputAdornment position="end" onClick={() => onChangeHandler('')} sx={{ cursor: 'pointer' }}>
              <Cancel />
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  );
}

export default Search;
