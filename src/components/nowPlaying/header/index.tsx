import { Box, Grid } from '@mui/material';
import { ImageBase } from '../../common/images/styled';
import { useUnit } from 'effector-react';
import Link from '../../common/text/Link';
import { TextTruncated } from '../../common/text/styled';
import { ControlPoint, MoreHoriz } from '@mui/icons-material';
import { $nowPlaying } from '../effect';

const Header = () => {
  const { track, artist } = useUnit($nowPlaying);

  return (
    <Grid container flexDirection="column" gap={2}>
      <Link to="" fontWeight="bold" lineHeight="1.7">
        {artist?.name}
      </Link>
      <ImageBase src={track?.poster} radius="8px" />
      <Grid container flexWrap="nowrap">
        <Box width="100%">
          <Link to="" fontSize="1.5rem" fontWeight="bold">
            {track?.name}
          </Link>
          <Grid container>
            <TextTruncated maxWidth="90%" lines={1} fontSize="0.95rem" color="secondary">
              {track?.authors?.map((author, index: number) => (
                <span key={author.id || author.name}>
                  <Link to="">{author.name}</Link>
                  {index !== track.authors.length - 1 && ', '}
                </span>
              ))}
            </TextTruncated>
          </Grid>
        </Box>
        <Grid container width="max-content" flexWrap="nowrap" alignItems="center" gap={1}>
          <ControlPoint color="secondary" />
          <MoreHoriz color="secondary" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
