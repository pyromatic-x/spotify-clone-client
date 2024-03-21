import { Grid, Typography } from '@mui/material';
import { useUnit } from 'effector-react';
import { $search } from '../effect';

const NoResults = () => {
  const searchValue = useUnit($search);

  return (
    <Grid justifyContent="center" direction="column" container marginTop="150px">
      <Typography
        variant="h6"
        component="h6"
        fontWeight="bold"
        textAlign="center"
        noWrap
        sx={{
          display: 'inline-flex',
          justifyContent: 'center',
        }}
      >
        <Typography component="span">Couldn't find "</Typography>
        <Typography
          component="span"
          sx={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            maxWidth: '140px',
            display: 'inline-block',
          }}
        >
          {searchValue}
        </Typography>
        <Typography component="span">"</Typography>
      </Typography>
      <Typography textAlign="center" variant="subtitle2">
        Try searching again using a different spelling or keyword.
      </Typography>
    </Grid>
  );
};

export default NoResults;
