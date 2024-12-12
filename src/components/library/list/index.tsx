import { useUnit } from 'effector-react';
import { StyledLibraryList } from './styled';
import { $filter, $libraryItems, $UI, refreshLibrary, getLibraryItemsFx } from '../effect';
import LibrarySkeleton from './Skeleton';
import LibrarySearchNothingFound from './NothingFound';
import LibraryItem from './item';
import { $socket } from '../../../ws/effect';
import { useEffect } from 'react';

const LibraryList = () => {
  const items = useUnit($libraryItems);
  const { search } = useUnit($filter);
  const { width } = useUnit($UI);
  const { view } = useUnit($filter);
  const socket = useUnit($socket);
  const isLoading = useUnit(getLibraryItemsFx.pending);

  useEffect(() => {
    const handleEvent = () => refreshLibrary();

    if (socket) {
      socket.on('library-update', handleEvent);
    }

    return () => {
      socket?.removeListener('followed');
    };
  }, [socket]);

  return (
    <StyledLibraryList gridSize={view.type === 'Grid' ? view.gridSize : undefined} width={width.name}>
      {isLoading ? (
        <LibrarySkeleton size={20} />
      ) : !!search && !items?.length ? (
        <LibrarySearchNothingFound />
      ) : (
        items?.map((item) => <LibraryItem {...item} key={item._id} />)
      )}
    </StyledLibraryList>
  );
};

export default LibraryList;
