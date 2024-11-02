import { Grid, useMediaQuery, useTheme } from '@mui/material';
import { useEffect } from 'react';
import { LibraryContainer } from './styled';
import { useUnit } from 'effector-react';
import { $collapsed, $width, changeWidth, getLibraryItems } from './effect';
import { libraryUIConfig } from './constants';
import LibraryHeader from './header';
import LibrarySearch from './search';
import LibrarySort from './sort';

const Library = () => {
  const width = useUnit($width);
  const collapsed = useUnit($collapsed);

  const theme = useTheme();
  const collapseMediaQuery = useMediaQuery(theme.breakpoints.between('xs', 'md'));

  useEffect(() => {
    if (!collapsed && collapseMediaQuery) changeWidth(libraryUIConfig.minWidth);
  }, [collapseMediaQuery, collapsed]);

  useEffect(() => {
    getLibraryItems();
  }, []);

  return (
    <LibraryContainer resizedWidth={width} mr="8px">
      <LibraryHeader />
      {!collapsed && (
        <Grid container alignItems="center" justifyContent="space-between" padding="0 22px" wrap="nowrap">
          <LibrarySearch />
          <LibrarySort />
        </Grid>
      )}
    </LibraryContainer>
  );
};

export default Library;
