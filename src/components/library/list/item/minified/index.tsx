import { LibraryItemDto } from '../../../../../api/dto/library';
import { LibraryItemCover, StyledLibraryItem } from '../styled';

const LibraryItemMinified = (item: LibraryItemDto) => {
  return (
    <StyledLibraryItem>
      <LibraryItemCover
        alt={item.name}
        src={item.cover + '?w=100&h=100&fit=contain'}
        variant={item._collection === 'artist' ? 'circle' : 'rounded'}
      />
    </StyledLibraryItem>
  );
};

export default LibraryItemMinified;
