import { useUnit } from 'effector-react';
import { $filter, filter } from '../effect';
import { Chip, IconButton, Stack } from '@mui/material';
import { Clear as ClearIcon } from '@mui/icons-material';
import { LibraryCategories } from '../types';
import { capitalizeFirstLetter } from '../../../utils/strings';

const LibraryHeaderCategories = () => {
  const { category } = useUnit($filter);

  return (
    <Stack direction="row" spacing={1} alignItems="center" margin="0 -4px">
      {!!category && (
        <IconButton onClick={() => filter({ category: null })} variant="filled">
          <ClearIcon />
        </IconButton>
      )}

      {!!category ? (
        <Chip
          label={capitalizeFirstLetter(category)}
          onClick={() => filter({ category: null })}
          className="active"
        />
      ) : (
        Object.values(LibraryCategories)
          .filter((t) => typeof t === 'string')
          .map((t) => (
            <Chip key={t} label={capitalizeFirstLetter(t)} onClick={() => filter({ category: t })} />
          ))
      )}
    </Stack>
  );
};

export default LibraryHeaderCategories;
