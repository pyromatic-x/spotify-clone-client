import { useUnit } from 'effector-react';
import { StyledLibraryList } from './styled';
import { $filter, $libraryItems, getLibraryItems, getLibraryItemsFx } from '../effect';
import { useEffect } from 'react';
import LibrarySkeleton from './Skeleton';
import LibrarySearchNothingFound from './NothingFound';
import LibraryItem from './item';

const LibraryList = () => {
  const items = useUnit($libraryItems);
  const { search } = useUnit($filter);
  const isLoading = useUnit(getLibraryItemsFx.pending);

  useEffect(() => {
    getLibraryItems();
  }, []);

  return (
    <StyledLibraryList>
      {isLoading ? (
        <LibrarySkeleton size={20} />
      ) : !!search && !items?.length ? (
        <LibrarySearchNothingFound />
      ) : (
        items?.map((item) => <LibraryItem item={item} key={item._id} />)
      )}
    </StyledLibraryList>
  );
};

export default LibraryList;
