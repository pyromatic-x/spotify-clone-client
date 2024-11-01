import { Box } from '@mui/material';
import { useUnit } from 'effector-react';
import { $search } from './effect';
import BrowseAll from '../../components/browse/BrowseAll';
// import { useSearchParams } from 'react-router-dom';
import Results from '../../components/browse/results';

function Browse() {
  const searchItems = useUnit($search);
  // const [searchParams] = useSearchParams();

  // const query = searchParams.get('q');

  return (
    <Box maxWidth="1920px">
      {!searchItems && <BrowseAll />}
      {searchItems && <Results />}
    </Box>
  );
}

export default Browse;
