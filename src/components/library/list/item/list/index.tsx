import { useUnit } from 'effector-react';
import { $UI } from '../../../effect';
import { LibraryItemCover, StyledLibraryItem } from '../styled';
import { Grid } from '@mui/material';
import LibraryItemMeta from './Meta';
import DateColumn from '../DateColumn';
import { TItemProps } from '../types';

const LibraryItemList = ({ onOpen, active, showPlayingIcon, ...item }: TItemProps) => {
  const { width } = useUnit($UI);

  return (
    <StyledLibraryItem
      onClick={onOpen}
      active={active}
      gridTemplateColumns={width.name !== 'default' ? '60% 1fr 1fr' : '1fr'}
    >
      <Grid container gap="12px" wrap="nowrap">
        <LibraryItemCover
          alt={item.name}
          src={item.cover + '?w=100&h=100&fit=contain'}
          variant={item._collection === 'artist' ? 'circle' : 'rounded'}
        />
        <LibraryItemMeta item={item} showPlayingIcon={showPlayingIcon} />
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
