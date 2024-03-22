import { Cancel, Search as SearchIcon } from '@mui/icons-material';
import { FormControl, InputAdornment } from '@mui/material';
import { StyledTextField } from './styled';

const Search = () => {
  return (
    <FormControl sx={{ position: 'absolute', top: '30px' }}>
      <StyledTextField
        sx={{ '& .MuiInputBase-root': { backgroundColor: 'secondary.light' } }}
        placeholder="What do you want to listen to?"
        autoFocus
        value={''}
        onChange={(e: any) => console.log(e)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: 'secondary.main' }} />
            </InputAdornment>
          ),
          endAdornment: '' && (
            <InputAdornment position="end" onClick={() => console.log('')} sx={{ cursor: 'pointer' }}>
              <Cancel />
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  );
};

export default Search;
