import { Box, Typography } from '@mui/material';
import { StyledCard } from './styled';
import PlayButton from '../../buttons/PlayButton';
import { PlayButtonWrapper } from '../../buttons/styled';
import { capitalizeFirstLetter } from '../../../utils/strings';
import { TItemCommonFields } from '../types';
import { useUnit } from 'effector-react';
import { $queue } from '../../audiobar/effect';
import { useGlobalAudioPlayer } from 'react-use-audio-player';

const RowCard = ({ cover, _id, _collection, name, description, author }: TItemCommonFields) => {
  const queue = useUnit($queue);
  const { playing } = useGlobalAudioPlayer();

  return (
    <StyledCard showPlayButton={queue?.target === _id && playing}>
      <Box position="relative" sx={{ aspectRatio: 1, width: '100%' }}>
        <Box
          component="img"
          src={cover + '?w=384&h=384'}
          sx={{ borderRadius: _collection === 'artist' ? '50%' : '6px' }}
        />
        <PlayButtonWrapper className="playbutton-container">
          <PlayButton _id={_id} type={_collection} />
        </PlayButtonWrapper>
      </Box>
      <Typography fontSize="0.95rem" truncate={2} mt={0.5}>
        {name}
      </Typography>
      <Typography fontSize="0.85rem" color="secondary" truncate={2} mt={0.5}>
        {description || author?.name || capitalizeFirstLetter(_collection)}
      </Typography>
    </StyledCard>
  );
};

export default RowCard;
