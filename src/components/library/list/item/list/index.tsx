import { useUnit } from 'effector-react';
import { $UI } from '../../../effect';
import { LibraryItemCover, StyledLibraryItem } from '../styled';
import { Grid } from '@mui/material';
import LibraryItemMeta from './Meta';
import { LibraryItemDto } from '../../../../../api/dto/library';
import DateColumn from '../DateColumn';

const LibraryItemList = (item: LibraryItemDto) => {
  const { width } = useUnit($UI);

  const selected = false;

  return (
    <StyledLibraryItem
      selected={selected}
      gridTemplateColumns={width.name !== 'default' ? '60% 1fr 1fr' : '1fr'}
    >
      <Grid container gap="12px" wrap="nowrap">
        <LibraryItemCover
          alt={item.name}
          src={item.cover + '?w=100&h=100&fit=contain'}
          variant={item._collection === 'artist' ? 'circle' : 'rounded'}
        />
        <LibraryItemMeta item={item} />
      </Grid>
      {width.name === 'max' && (
        <>
          <DateColumn date={item.addedAt} />
          <DateColumn date={item.lastPlayedAt} justifyContent="end" />
        </>
      )}
    </StyledLibraryItem>
  );
};

export default LibraryItemList;
