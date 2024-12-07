import { Box, Grid, Tooltip, Typography } from '@mui/material';
import { LibraryItemDto } from '../../../../../api/dto/library';
import { useUnit } from 'effector-react';
import { $filter } from '../../../effect';
import { LibraryItemCover, PinIcon, StyledLibraryItem } from '../styled';
import { LibraryCategories } from '../../../types';
import { capitalizeFirstLetter } from '../../../../../utils/strings';

const Meta = ({ item, category }: { item: LibraryItemDto; category: LibraryCategories | null }) => {
  const { name, tracksCount, author, _collection, pin } = item;

  let text: string | undefined = capitalizeFirstLetter(_collection);

  if (tracksCount) text += ` 🞄 ${tracksCount} songs`;
  else if (!category && !tracksCount && _collection !== 'artist') text += ` 🞄 ${author}`;
  else if (category && category !== LibraryCategories.Artists) text = author;
  else if (category === LibraryCategories.Artists) text = '';

  return (
    <Grid container flexDirection="column">
      <Typography color={pin ? 'primary' : 'white'} fontSize="0.9rem" fontWeight="bold" truncate={1}>
        {name}
      </Typography>
      <Grid container alignItems="center">
        {pin && (
          <>
            <PinIcon />
            &nbsp;
          </>
        )}

        {text && (
          <Typography color="secondary" fontSize="0.8rem">
            {text}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

const LibraryItemGrid = (item: LibraryItemDto) => {
  const { category, view } = useUnit($filter);

  return (
    <Tooltip
      placement="right"
      title={view?.gridSize && view?.gridSize < 30 ? <Meta item={item} category={category} /> : null}
    >
      <StyledLibraryItem>
        <Grid container flexDirection="column" alignItems="center">
          <Box width="100%" mb={1}>
            <LibraryItemCover
              alt={item.name}
              src={item.cover}
              variant={item._collection === 'artist' ? 'circle' : 'rounded'}
              fullwidth
            />
          </Box>
          {view?.gridSize && view?.gridSize >= 30 && <Meta item={item} category={category} />}
        </Grid>
      </StyledLibraryItem>
    </Tooltip>
  );
};

export default LibraryItemGrid;
