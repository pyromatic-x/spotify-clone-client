import { Grid, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { capitalizeFirstLetter } from '../../../../utils/strings';
import { useUnit } from 'effector-react';
import { $category, $collapsed, $expanded } from '../../effect';
import { CollapsedItem, Item, StyledAvatar } from './styled';
import { ILibraryItem } from '../../../../api/types/library';
import dayjs from 'dayjs';

const LibraryListItem = ({ name, image, type, by, addedAt, playedAt }: ILibraryItem) => {
  const collapsed = useUnit($collapsed);
  const category = useUnit($category);
  const expanded = useUnit($expanded);

  let secondaryText = category ? '' : capitalizeFirstLetter(type);
  if (type === 'album' || type === 'playlist') {
    secondaryText = category ? by ?? '' : capitalizeFirstLetter(type) + ` ● ${by}`;
  }

  if (collapsed)
    return (
      <CollapsedItem>
        <StyledAvatar
          alt={name}
          src={image}
          sx={{ width: 48, height: 48 }}
          type={type === 'artist' ? 'circle' : 'square'}
        />
      </CollapsedItem>
    );

  return (
    <Item expanded={expanded}>
      <Grid container width="auto">
        <ListItemAvatar sx={{ minWidth: 'auto' }}>
          <StyledAvatar
            alt={name}
            src={image}
            sx={{ width: 48, height: 48 }}
            type={type === 'artist' ? 'circle' : 'square'}
          />
        </ListItemAvatar>
        <ListItemText
          sx={{ alignSelf: 'center', margin: '0 0 0 12px' }}
          primary={name}
          secondary={secondaryText}
        />
      </Grid>
      {expanded && (
        <>
          <Typography textAlign="center" fontSize="14px" color="secondary">
            {dayjs(addedAt).format('MMM DD, YYYY')}
          </Typography>
          <Typography textAlign="end" fontSize="14px" color="secondary">
            {dayjs(playedAt).fromNow()}
          </Typography>
        </>
      )}
    </Item>
  );
};

export default LibraryListItem;
