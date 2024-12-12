import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { $playlistError, getPlaylistPageData, resetPlaylistPageData } from './effect';
import { useUnit } from 'effector-react';
import Error from '../Error';
import PageHeader from './Header';
import { Box, Typography } from '@mui/material';

const PlaylistPage = () => {
  const { id } = useParams();

  const error = useUnit($playlistError);

  useEffect(() => {
    if (id) getPlaylistPageData(id);

    return resetPlaylistPageData;
  }, [id]);

  useEffect(() => {
    document.title = 'Spotify Clone';
  }, []);

  if (error) return <Error />;

  return (
    <>
      <PageHeader />
      <Box position="relative" zIndex={1}>
        <Typography>tracks and stuff</Typography>
      </Box>
    </>
  );
};

export default PlaylistPage;
