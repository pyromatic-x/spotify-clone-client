import { Box, Grid, Link } from '@mui/material';
import { useUnit } from 'effector-react';
import { $sectionItemsCount } from '../../root/effect';
import CategoryCard from './Card';
import { IBrowseCategory } from '../../../api/types/browse';

const Categories = ({ categories }: { categories: Array<IBrowseCategory> }) => {
  const count = useUnit($sectionItemsCount);

  return (
    <Grid container>
      <Grid container alignItems="center" justifyContent="space-between" mb={2}>
        <Link underline="hover" fontWeight="bold" variant="h6" color="white">
          Browse all
        </Link>
      </Grid>
      <Box
        display="grid"
        overflow="hidden"
        gridTemplateColumns={`repeat(${count}, 1fr)`}
        width="100%"
        gap="20px"
      >
        {categories.map((category) => (
          <CategoryCard {...category} key={category.id} />
        ))}
      </Box>
    </Grid>
  );
};

export default Categories;
