import { useUnit } from 'effector-react';
import { $filter } from '../../effect';
import { Grid, Typography } from '@mui/material';
import { capitalizeFirstLetter } from '../../../../utils/strings';
import { PinIcon } from './styled';
import { LibraryItemDto } from '../../../../api/dto/library';

const LibraryItemMeta = ({ item }: { item: LibraryItemDto }) => {
  const { _collection, name, author, tracksCount, pin } = item;

  const { category } = useUnit($filter);

  let description: string | undefined = capitalizeFirstLetter(_collection);
  if (author) description += ` ● ${author}`;
  if (category) description = author;
  if (tracksCount) description = `${tracksCount} songs`;

  return (
    <Grid container alignItems="start" justifyContent="center" flexDirection="column">
      <Typography fontWeight="bold" color="white" fontSize="0.9rem">
        {name}
      </Typography>
      {description && (
        <Typography color="secondary" fontSize="0.9rem" display="inline-flex" alignItems="center" gap="6px">
          {pin && <PinIcon />}
          {description}
        </Typography>
      )}
    </Grid>
  );
};

export default LibraryItemMeta;
