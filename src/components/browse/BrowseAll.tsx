import { Box } from '@mui/material';
import { useUnit } from 'effector-react';
import Section from '../common/section';
import Categories from './categories';
import { $browseCategories, $recentSearches } from '../../pages/browse/effect';

const BrowseAll = () => {
  const categories = useUnit($browseCategories);
  const recent = useUnit($recentSearches);

  return (
    <Box>
      {recent && <Section title="Recently searches" items={recent} />}
      {categories && <Categories categories={categories} />}
    </Box>
  );
};

export default BrowseAll;
