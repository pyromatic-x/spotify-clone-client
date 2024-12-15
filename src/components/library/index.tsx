import { Grid } from '@mui/material';
import { LibraryContainer } from './styled';
import { useUnit } from 'effector-react';
import { $UI, getLibrary, refreshLibrary, toggleShadow } from './effect';
import LibraryHeader from './header';
import LibrarySearch from './search';
import LibrarySortAndView from './sortAndView';
import LibraryList from './list';
import { LibraryListConrainer } from './list/styled';
import { $socket } from '../../auth/effect';
import { useEffect } from 'react';

const Library = () => {
  const { width } = useUnit($UI);
  const socket = useUnit($socket);

  const handleScroll = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
    toggleShadow(event.currentTarget.scrollTop > 1);
  };

  useEffect(() => {
    if (socket) {
      socket.on('library-updated', refreshLibrary);
    }

    return () => {
      socket?.removeListener('followed');
    };
  }, [socket]);

  useEffect(() => {
    getLibrary();
  }, []);

  return (
    <LibraryContainer resizedWidth={width.value}>
      <LibraryHeader />
      <LibraryListConrainer onScroll={handleScroll}>
        {width.name === 'default' && (
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            padding="0px 22px 8px 18px"
            wrap="nowrap"
          >
            <LibrarySearch />
            <LibrarySortAndView />
          </Grid>
        )}
        <LibraryList />
      </LibraryListConrainer>
    </LibraryContainer>
  );
};

export default Library;
