import { Box, styled } from '@mui/material';
import { LibraryUIConfig } from '../constants';

const getGridColumns = (gridSize: number, width: keyof typeof LibraryUIConfig) => {
  if (width === 'max') {
    if (gridSize >= 70) return 2;
    if (gridSize >= 40) return 3;
    if (gridSize >= 15) return 4;
    if (gridSize >= 10) return 5;
    if (gridSize >= 5) return 6;
    if (gridSize >= 1) return 7;
  } else if (width === 'default') {
    if (gridSize >= 70) return 1;
    if (gridSize >= 20) return 2;
    if (gridSize >= 10) return 3;
    if (gridSize >= 1) return 4;
  }

  return 1;
};

export const LibraryListConrainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'scroll',
  height: '100%',
}));

export const StyledLibraryList = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'gridSize' && prop !== 'viewType',
})<{ gridSize?: number; width: keyof typeof LibraryUIConfig }>(({ gridSize, width }) => ({
  padding: '0 8px',

  ...(gridSize && width !== 'min'
    ? {
        display: 'grid',
        gridTemplateColumns: `repeat(${getGridColumns(gridSize, width)}, 1fr)`,
      }
    : {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }),
}));
