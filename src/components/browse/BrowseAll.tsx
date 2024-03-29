import { Box } from '@mui/material';
import { useUnit } from 'effector-react';
import { $browseCategories, $recentSearches } from '../../pages/Browse/effect';
import Section from '../common/section';
import Categories from './categories';

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
