import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useUnit } from 'effector-react';
import Error from '../Error';
import { Box, Typography } from '@mui/material';
import { $album, $albumError } from './effect';
import { getAlbumPageData } from './effect';
import { resetAlbumPageData } from './effect';
import PageHeader from '../../components/pageHeader';

const AlbumPage = () => {
  const { id } = useParams();

  const album = useUnit($album);
  const error = useUnit($albumError);

  useEffect(() => {
    if (id) getAlbumPageData(id);

    return resetAlbumPageData;
  }, [id]);

  useEffect(() => {
    document.title = 'Spotify Clone';
  }, []);

  if (error) return <Error />;

  return (
    <>
      {album?.meta && <PageHeader {...album.meta} />}
      <Box position="relative" zIndex={1}>
        <Typography>tracks and stuff</Typography>
      </Box>
    </>
  );
};

export default AlbumPage;
