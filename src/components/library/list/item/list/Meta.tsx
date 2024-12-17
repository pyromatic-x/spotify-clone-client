import { useUnit } from 'effector-react';
import { $filter } from '../../../effect';
import { Grid, Typography } from '@mui/material';
import { capitalizeFirstLetter } from '../../../../../utils/strings';
import { PinIcon } from '../styled';
import { LibraryItemDto } from '../../../../../api/dto/library';
import { $queue } from '../../../../audiobar/effect';
import { VolumeUpOutlined as PlayingIcon } from '@mui/icons-material';
import { useGlobalAudioPlayer } from 'react-use-audio-player';

const LibraryItemMeta = ({ item }: { item: LibraryItemDto }) => {
  const { _collection, name, author, tracksCount, pin } = item;

  const { category } = useUnit($filter);
  const queue = useUnit($queue);

  const { playing, isLoading } = useGlobalAudioPlayer();

  let description: string | undefined = capitalizeFirstLetter(_collection);
  if (author) description += ` 🞄 ${author}`;
  if (category) description = author;
  if (tracksCount) description = `${capitalizeFirstLetter(_collection)} 🞄 ${tracksCount} songs`;

  return (
    <Grid container alignItems="center" justifyContent="space-between" flexWrap="nowrap" paddingRight="12px">
      <Grid container alignItems="start" justifyContent="center" flexDirection="column">
        <Typography
          fontWeight="bold"
          color={queue?.target === item._id ? 'primary' : 'white'}
          fontSize="0.9rem"
          truncate={1}
          maxWidth="240px"
        >
          {name}
        </Typography>
        {description && (
          <Typography color="secondary" fontSize="0.9rem" display="inline-flex" alignItems="center" gap="6px">
            {pin && <PinIcon />}
            {description}
          </Typography>
        )}
      </Grid>
      {queue?.target === item._id && (playing || isLoading) && (
        <PlayingIcon sx={{ color: 'primary.main', fontSize: '1.2rem' }} />
      )}
    </Grid>
  );
};

export default LibraryItemMeta;
