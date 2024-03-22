import { Box, Grid, Link } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { ISection } from '../../home/constants';
import Card from '../cards/main';
import { useUnit } from 'effector-react';
import { $outletWidth } from '../../root/effect';

function Section({ title, items = [] }: ISection) {
  const outletWidth = useUnit($outletWidth);
  const [itemsCanNest, setItemsCanNest] = useState(1);
  const ref = useRef();

  useEffect(() => {
    setItemsCanNest(Math.round((outletWidth - 90) / 200));
  }, [outletWidth]);

  return (
    <Grid container>
      <Grid container alignItems="center" justifyContent="space-between" mb={2}>
        <Link underline="hover" fontWeight="bold" variant="h6" color="white">
          {title}
        </Link>
        <Link color="secondary" fontSize="small" fontWeight="bold" underline="hover">
          Show all
        </Link>
      </Grid>
      <Box display="flex" overflow="hidden" flexWrap="nowrap" margin="0 -10px" ref={ref} width="100%">
        {items.slice(0, itemsCanNest).map((item) => (
          <Card {...item} key={'home-section-item_' + item.title} />
        ))}
      </Box>
    </Grid>
  );
}

export default Section;
