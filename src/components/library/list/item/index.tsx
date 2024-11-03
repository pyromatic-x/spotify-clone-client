import { useUnit } from 'effector-react';
import { $UI } from '../../effect';
import { LibraryItemDto } from '../../../../api/types';
import { LibraryItemCover, StyledLibraryItem } from './styled';
import { Grid, Typography, TypographyProps } from '@mui/material';
import LibraryItemMeta from './Meta';
import { getDateDiff } from '../../utils';

interface DateColumnProps extends TypographyProps {
  date?: string;
}

const DateColumn = ({ date, justifyContent }: DateColumnProps) => (
  <Typography
    color="secondary"
    fontSize="0.9rem"
    display="inline-flex"
    alignItems="center"
    justifyContent={justifyContent}
  >
    {getDateDiff(date)}
  </Typography>
);

const LibraryItem = ({ item }: { item: LibraryItemDto }) => {
  const { width } = useUnit($UI);

  const selected = false;

  // const handleOnClick = (_id: string, _collection: LibraryItemResponse['_collection']) => {};

  return (
    <StyledLibraryItem selected={selected}>
      <Grid container gap="12px" wrap="nowrap">
        <LibraryItemCover
          alt={item.name}
          src={item.cover}
          variant={item._collection === 'artist' ? 'circle' : 'rounded'}
        />
        {width.name !== 'min' && (
          <>
            <LibraryItemMeta item={item} />
          </>
        )}
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

export default LibraryItem;
