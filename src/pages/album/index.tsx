import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useUnit } from 'effector-react';
import Error from '../Error';
import { $album, $albumError } from './effect';
import { getAlbumPageData } from './effect';
import { resetAlbumPageData } from './effect';
import UnitPage from '../../components/unitPage';
import TracksTable from '../../components/unitPage/tracks';
import { CollectionEnums } from '../../api/dto';
import Row from '../../components/row';
import { Box, Typography } from '@mui/material';
import dayjs from 'dayjs';

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

  const source = { type: 'album' as Extract<keyof typeof CollectionEnums, 'album'>, _id: id! };

  return (
    album && (
      <UnitPage meta={album.meta} type={source.type}>
        <TracksTable source={source} tracks={album.tracks} />
        <Box padding="0 8px">
          <Typography mt={6} fontSize="0.85rem" fontWeight="bold" color="secondary">
            {dayjs(album.meta.releasedAt).format('MMM DD, YYYY')}
          </Typography>
          {album?.more && (
            <Box mt={8}>
              <Row items={album.more} title={`More by ${album.meta.author.name}`} />
            </Box>
          )}
        </Box>
      </UnitPage>
    )
  );
};

export default AlbumPage;
