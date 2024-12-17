import { Box, Grid, Link, Typography } from '@mui/material';
import RowCard from './card';
import { RowItemsContainer } from './card/styled';
import { TItemCommonFields } from './types';
import { useUnit } from 'effector-react';
import { $mainContainer } from '../main/effect';
import { getItemsCount } from './utils';
import { useEffect, useState } from 'react';

type TProps = {
  title?: string;
  showAll?: string; // link
  items: Array<TItemCommonFields>;
};

const Row = ({ title, showAll, items }: TProps) => {
  const { width } = useUnit($mainContainer);

  const [count, setCount] = useState(getItemsCount(width));

  useEffect(() => {
    setCount(getItemsCount(width));
  }, [width]);

  return (
    <Box width="100%">
      <Grid container justifyContent="space-between" width="100%" alignItems="center">
        <Typography fontWeight="bold" fontSize="1.35rem">
          {title}
        </Typography>
        {!!showAll && (
          <Link fontSize="0.85rem" fontWeight="600">
            Show all
          </Link>
        )}
      </Grid>
      <RowItemsContainer count={count}>
        {items.slice(0, count).map((i) => (
          <RowCard {...i} key={i._id} />
        ))}
      </RowItemsContainer>
    </Box>
  );
};

export default Row;
