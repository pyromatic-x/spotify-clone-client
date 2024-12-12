import { Box, Grid, Tooltip, Typography } from '@mui/material';
import { LibraryItemDto } from '../../../../../api/dto/library';
import { useUnit } from 'effector-react';
import { $filter } from '../../../effect';
import { LibraryItemCover, PinIcon, StyledLibraryItem } from '../styled';
import { LibraryCategories } from '../../../types';
import { capitalizeFirstLetter } from '../../../../../utils/strings';
import { TItemProps } from '../types';

const Meta = ({ item, category }: { item: LibraryItemDto; category: LibraryCategories | null }) => {
  const { name, tracksCount, author, _collection, pin } = item;

  let text: string | undefined = capitalizeFirstLetter(_collection);

  if (tracksCount) text += ` 🞄 ${tracksCount} songs`;
  else if (!category && !tracksCount && _collection !== 'artist') text += ` 🞄 ${author}`;
  else if (category && category !== LibraryCategories.Artists) text = author;
  else if (category === LibraryCategories.Artists) text = '';

  return (
    <Grid container flexDirection="column" mt={1}>
      <Typography color={pin ? 'primary' : 'white'} fontSize="0.9rem" fontWeight="bold" truncate={1}>
        {name}
      </Typography>
      <Grid container alignItems="center" wrap="nowrap">
        {pin && (
          <>
            <PinIcon />
            &nbsp;
          </>
        )}

        {text && (
          <Typography color="secondary" fontSize="0.8rem" truncate={1}>
            {text}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

const LibraryItemGrid = ({ onOpen, ...item }: TItemProps) => {
  const { category, view } = useUnit($filter);

  const cover = item.cover + '?w=400&h=400&fit=contain';

  return (
    <Tooltip
      placement="right"
      title={view?.gridSize && view?.gridSize < 30 ? <Meta item={item} category={category} /> : null}
    >
      <StyledLibraryItem onClick={onOpen}>
        {view.gridSize && view.gridSize < 30 ? (
          <LibraryItemCover
            alt={item.name}
            src={cover}
            variant={item._collection === 'artist' ? 'circle' : 'rounded'}
            fullwidth
          />
        ) : (
          <Grid container flexDirection="column" alignItems="center">
            <Box width="100%">
              <LibraryItemCover
                alt={item.name}
                src={cover}
                variant={item._collection === 'artist' ? 'circle' : 'rounded'}
                fullwidth
              />
            </Box>
            {view?.gridSize && view?.gridSize >= 30 && <Meta item={item} category={category} />}
          </Grid>
        )}
      </StyledLibraryItem>
    </Tooltip>
  );
};

export default LibraryItemGrid;
