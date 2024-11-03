import { Grid } from '@mui/material';
import { LibraryContainer } from './styled';
import { useUnit } from 'effector-react';
import { $UI, toggleShadow } from './effect';
import LibraryHeader from './header';
import LibrarySearch from './search';
import LibrarySort from './sort';
import LibraryList from './list';
import { LibraryListConrainer } from './list/styled';

const Library = () => {
  const { width } = useUnit($UI);

  const handleScroll = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
    toggleShadow(event.currentTarget.scrollTop > 1);
  };

  return (
    <LibraryContainer resizedWidth={width.value} mr="8px">
      <LibraryHeader />
      <LibraryListConrainer onScroll={handleScroll}>
        {width.name === 'default' && (
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            padding="0px 22px 8px 22px"
            wrap="nowrap"
          >
            <LibrarySearch />
            <LibrarySort />
          </Grid>
        )}
        <LibraryList />
      </LibraryListConrainer>
    </LibraryContainer>
  );
};

export default Library;
