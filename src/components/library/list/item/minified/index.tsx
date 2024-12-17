import { LibraryItemCover, StyledLibraryItem } from '../styled';
import { TItemProps } from '../types';

const LibraryItemMinified = ({ onOpen, active, ...item }: TItemProps) => {
  return (
    <StyledLibraryItem onClick={onOpen} active={active}>
      <LibraryItemCover
        alt={item.name}
        src={item.cover + '?w=100&h=100&fit=contain'}
        variant={item._collection === 'artist' ? 'circle' : 'rounded'}
      />
    </StyledLibraryItem>
  );
};

export default LibraryItemMinified;
