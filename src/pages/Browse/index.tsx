import { Box } from '@mui/material';
import { useUnit } from 'effector-react';
import { $search } from './effect';
import BrowseAll from '../../components/browse/BrowseAll';

function Browse() {
  const searchItems = useUnit($search);

  return <Box maxWidth="1920px">{!searchItems && <BrowseAll />}</Box>;
}

export default Browse;
