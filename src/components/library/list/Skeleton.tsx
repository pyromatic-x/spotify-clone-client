import { Grid, Skeleton } from '@mui/material';

const LibrarySkeleton = ({ size }: { size: number }) => {
  return (
    <Grid container flexDirection="column" alignItems="center" gap="8px">
      {Array.from(Array(size).keys()).map((t) => (
        <Grid container alignItems="center" gap="8px" wrap="nowrap" key={t}>
          <Skeleton variant="rounded" width={50} height={50} sx={{ minWidth: '50px' }} />
          <Grid container flexDirection="column">
            <Skeleton variant="text" width={160} height={20} sx={{ mb: 0.5 }} />
            <Skeleton variant="text" width={210} height={20} />
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default LibrarySkeleton;
