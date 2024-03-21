import { Stack } from '@mui/material';
import { useUnit } from 'effector-react';
import { $category, setCategory } from '../../../effect';
import { ClearIconButton } from '../styled';
import { capitalizeFirstLetter } from '../../../../../utils/strings';
import { ChipStyled } from './styled';
import { Clear as ClearIcon } from '@mui/icons-material';
import { Categories as CategoriesEnum } from '../../../types';

const Categories = () => {
  const category = useUnit($category);

  return (
    <Stack direction="row" spacing={1} alignItems="center" paddingLeft="3px">
      {!!category && (
        <ClearIconButton onClick={() => setCategory(null)}>
          <ClearIcon />
        </ClearIconButton>
      )}
      {!!category ? (
        <ChipStyled
          label={capitalizeFirstLetter(category)}
          onClick={() => setCategory(null)}
          className="active"
        />
      ) : (
        Object.values(CategoriesEnum)
          .filter((t) => typeof t === 'string')
          .map((t: any) => (
            <ChipStyled key={t} label={capitalizeFirstLetter(t)} onClick={() => setCategory(t)} />
          ))
      )}
    </Stack>
  );
};

export default Categories;
