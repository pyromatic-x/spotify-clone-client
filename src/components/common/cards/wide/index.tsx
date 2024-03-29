import { CardContent, Typography } from '@mui/material';

import { StyledCard, MediaContainer } from './styled';
import PlayButton from '../../buttons/PlayButton';
import Curves from '../../images/curves';
import { ImageBase, Placeholder } from '../../images/styled';
import { checkIsColorTooBright } from '../../../../utils/strings';
import { useState } from 'react';
import { setBackgroundColor } from '../../../../pages/home/effect';
import { setHeaderColor } from '../../../root/header/effect';
import theme from '../../../../theme';
import { IPlaylistRecommended } from '../../../../api/types/playlist';
import Lines from '../../images/lines';

const WideCard = ({ name, image, styles }: IPlaylistRecommended) => {
  const [loaded, setIsLoaded] = useState(false);
  const [size, setSize] = useState(0);

  const color = styles?.color || theme.palette.iris;

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
      <MediaContainer>
        <Placeholder radius="4px 0 0 4px" loaded={loaded} color={color} />
        <ImageBase
          src={image}
          radius="4px 0 0 4px"
          onLoad={(event: any) => {
            setSize(event.target.height);
            setIsLoaded(true);
          }}
          onError={() => setIsLoaded(false)}
        />
        {styles?.variant === 'curves' && (
          <Curves color={color} title={name} isColorBright={isColorBright} loaded={loaded} size={size} />
        )}
        {styles?.variant === 'lines' && <Lines color={color} title={name} loaded={loaded} />}
      </MediaContainer>
      <CardContent>
        <Typography fontWeight="bold" fontSize="0.9rem">
          {name}
        </Typography>
        <PlayButton />
      </CardContent>
    </StyledCard>
  );
};

export default WideCard;
