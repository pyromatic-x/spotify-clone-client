import { Box, Slider } from '@mui/material';
import { useUnit } from 'effector-react';
import { $filter, filter } from '../effect';
import { LibraryView } from '../types';

const LibrarySortAndViewSlider = () => {
  const { view } = useUnit($filter);

  const handleOnChange = (_: Event, value: number | number[]) => {
    filter({ view: { type: view.type, gridSize: value as number } });
  };

  return view.type === LibraryView['Grid'] ? (
    <Box padding="0 14px">
      <Slider value={view?.gridSize || 50} step={1} min={1} max={100} onChange={handleOnChange} active />
    </Box>
  ) : (
    <></>
  );
};

export default LibrarySortAndViewSlider;
