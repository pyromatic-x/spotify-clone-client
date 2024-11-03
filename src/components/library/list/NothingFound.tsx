import { Grid, Typography } from '@mui/material';

import { useUnit } from 'effector-react';
import { $filter } from '../effect';

function LibrarySearchNothingFound() {
  const { search } = useUnit($filter);

  return (
    <Grid
      container
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100%"
    >
      <Typography fontWeight="bold" mb={1} fontSize="0.9rem">
        Couldn't find "{search}"
      </Typography>
      <Typography textAlign="center" fontSize="0.9rem">
        Try searching again using a different spelling or keyword.
      </Typography>
    </Grid>
  );
}

export default LibrarySearchNothingFound;
