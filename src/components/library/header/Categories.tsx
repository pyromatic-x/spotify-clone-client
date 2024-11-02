import { useUnit } from 'effector-react';
import { $filter, filter } from '../effect';
import { Stack } from '@mui/material';
import { HeaderCategoryChip, HeaderCategoryIconButton } from './styled';
import { Clear as ClearIcon } from '@mui/icons-material';
import { LibraryCategories } from '../types';
import { capitalizeFirstLetter } from '../../../utils/strings';

const LibraryHeaderCategories = () => {
  const { category } = useUnit($filter);

  return (
    <Stack direction="row" spacing={1} alignItems="center" margin="0 -4px">
      {!!category && (
        <HeaderCategoryIconButton onClick={() => filter({ category: null })}>
          <ClearIcon />
        </HeaderCategoryIconButton>
      )}

      {!!category ? (
        <HeaderCategoryChip
          label={capitalizeFirstLetter(category)}
          onClick={() => filter({ category: null })}
          className="active"
        />
      ) : (
        Object.values(LibraryCategories)
          .filter((t) => typeof t === 'string')
          .map((t: any) => (
            <HeaderCategoryChip
              key={t}
              label={capitalizeFirstLetter(t)}
              onClick={() => filter({ category: t })}
            />
          ))
      )}
    </Stack>
  );
};

export default LibraryHeaderCategories;
