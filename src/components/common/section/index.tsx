import { Box, Grid, Link } from '@mui/material';
import Card from '../cards/main';
import { useUnit } from 'effector-react';
import { $sectionItemsCount } from '../../root/effect';
import { ISection } from '../../../api/types/section';

function Section({ title, link, items = [] }: ISection) {
  const count = useUnit($sectionItemsCount);

  return (
    <Grid container>
      <Grid container alignItems="center" justifyContent="space-between" mb={2}>
        <Link underline="hover" fontWeight="bold" variant="h6" color="white">
          {title}
        </Link>
        {!!link && (
          <Link color="secondary" fontSize="small" fontWeight="bold" underline="hover">
            Show all
          </Link>
        )}
      </Grid>
      <Box display="grid" overflow="hidden" margin="0 -10px" gridTemplateColumns={`repeat(${count}, 1fr)`}>
        {items.slice(0, count).map((item) => (
          <Card {...item} key={item.id} />
        ))}
      </Box>
    </Grid>
  );
}

export default Section;
