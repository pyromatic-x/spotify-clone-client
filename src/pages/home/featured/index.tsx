import { useUnit } from 'effector-react';
import { FeaturedCard, FeaturedCardCover, FeaturedContainer } from './styled';
import { $homeCompilations } from '../effect';
import { Typography } from '@mui/material';
import { changeHomeOverlayColor } from '../overlay/effect';
import { generateColors } from '../../../utils/color';
import { useMemo } from 'react';
import PlayButton from '../../../components/buttons/PlayButton';
import { PlayButtonWrapper } from '../../../components/buttons/styled';

const HomeFeatured = () => {
  const compilations = useUnit($homeCompilations);

  const colors = useMemo(() => generateColors(), []);

  const handleOnMouseEnter = (color: string) => {
    changeHomeOverlayColor(color);
  };

  const handleOnMouseLeave = () => {
    changeHomeOverlayColor('#21115F');
  };

  return (
    <FeaturedContainer>
      {compilations?.featured?.map((f, i) => (
        <FeaturedCard
          key={f._id}
          onMouseEnter={() => handleOnMouseEnter(colors[i])}
          onMouseLeave={handleOnMouseLeave}
        >
          <FeaturedCardCover src={(f.cover || f.avatar) + '?w=160&h=160'} sx={{ aspectRatio: 1 }} />
          <Typography fontWeight="600" fontSize="1rem" truncate={2}>
            {f.name}
          </Typography>
          <PlayButtonWrapper right={8}>
            <PlayButton _id={f._id} type={f._collection} />
          </PlayButtonWrapper>
        </FeaturedCard>
      ))}
    </FeaturedContainer>
  );
};

export default HomeFeatured;
