import { Typography } from '@mui/material';
import { StyledLibraryTableHeader } from './styled';

const LibraryTableHeader = () => (
  <StyledLibraryTableHeader>
    <Typography>Title</Typography>
    <Typography>Date Added</Typography>
    <Typography textAlign="end" paddingRight="5px">
      Played
    </Typography>
  </StyledLibraryTableHeader>
);

export default LibraryTableHeader;
