import { CardContent, Typography } from '@mui/material';

import { StyledCard, MediaContainer } from './styled';
import { ISectionItem } from '../../../home/constants';
import PlayButton from '../../buttons/PlayButton';
import LikedSongsImage from '../../images/likedSongs';
import Curves from '../../images/curves';
import { ImageBase } from '../../images/styled';
import { checkIsColorTooBright } from '../../../../utils/strings';
import { useState } from 'react';
import { setBackgroundColor } from '../../../../pages/home/effect';
import { setHeaderColor } from '../../../root/header/effect';
import theme from '../../../../theme';

const WideCard = ({ title, image, color }: Omit<ISectionItem, 'id'>) => {
  const [loaded, setIsLoaded] = useState(false);
  const [size, setSize] = useState(0);

  color = color || theme.palette.iris;

  const isColorBright = checkIsColorTooBright(color);

  const handleOnMouseEnter = () => {
    setHeaderColor(color!);
    setBackgroundColor(color!);
  };
  const handleOnMouseLeave = () => {
    setHeaderColor(theme.palette.iris);
    setBackgroundColor(theme.palette.iris);
  };

  return (
    <StyledCard onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
      {title === 'Liked Songs' ? (
        <LikedSongsImage />
      ) : (
        <MediaContainer>
          <ImageBase
            src={image!.src}
            radius="4px 0 0 4px"
            onLoad={(event: any) => {
              setSize(event.target.height);
              setIsLoaded(true);
            }}
          />
          <Curves color={color} title={title} isColorBright={isColorBright} loaded={loaded} size={size} />
        </MediaContainer>
      )}
      <CardContent>
        <Typography fontWeight="bold" fontSize="0.9rem">
          {title}
        </Typography>
        <PlayButton />
      </CardContent>
    </StyledCard>
  );
};

export default WideCard;
