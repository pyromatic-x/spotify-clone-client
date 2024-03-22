import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const StyledTextField = styled(TextField)({
  '& .MuiInputBase-root': {
    height: '44px',
    fontSize: '0.9rem',
    width: '30vw',
    minWidth: '260px',
    borderRadius: '25px',
    position: 'absolute',
    top: '-23px',
    left: '0',
  },
});
