import { Grid, Typography } from '@mui/material';
import { LibraryItemDto } from '../../../../../api/dto/library';
import { useUnit } from 'effector-react';
import { $filter, $UI } from '../../../effect';
import { PinIcon, StyledLibraryItem } from '../styled';
import DateColumn from '../DateColumn';
import { LibraryCategories } from '../../../types';
import { capitalizeFirstLetter } from '../../../../../utils/strings';
import { TItemProps } from '../types';
import { $queue } from '../../../../audiobar/effect';
import { VolumeUpOutlined as PlayingIcon } from '@mui/icons-material';

const Description = ({
  category,
  author,
  collection,
}: {
  category: LibraryCategories | null;
  author: string;
  collection: LibraryItemDto['_collection'];
}) => {
  let text = '';

  if (!category) text = '🞄 ' + capitalizeFirstLetter(collection);
  if (category === LibraryCategories['Albums']) text = '🞄 ' + author;

  return <Typography color="secondary">{text}</Typography>;
};

const LibraryItemCompact = ({ onOpen, active, showPlayingIcon, ...item }: TItemProps) => {
  const { width } = useUnit($UI);
  const { category } = useUnit($filter);
  const queue = useUnit($queue);

  const { pin, name, _collection, author, _id } = item;

  return (
    <StyledLibraryItem
      gridTemplateColumns={width.name !== 'default' ? '60% 1fr 1fr' : '1fr'}
      onClick={onOpen}
      active={active}
    >
      <Grid container alignItems="center" justifyContent="space-between" pr="12px">
        <Grid container alignItems="center" width="max-content">
          {pin && (
            <>
              <PinIcon />
              &nbsp;
            </>
          )}
          <Typography color={queue?.target === _id ? 'primary' : 'white'}>{name}&nbsp;</Typography>
          <Description category={category} collection={_collection} author={author!} />
        </Grid>
        {showPlayingIcon && <PlayingIcon sx={{ color: 'primary.main', fontSize: '1.2rem' }} />}
      </Grid>
      {width.name === 'max' && (
        <>
          <DateColumn date={item.addedAt} />
          <DateColumn date={item.lastPlayedAt} justifyContent="end" />
        </>
      )}
    </StyledLibraryItem>
  );
};

export default LibraryItemCompact;
