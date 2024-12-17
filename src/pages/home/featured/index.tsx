import { useUnit } from 'effector-react';
import { FeaturedCard, FeaturedCardCover, FeaturedContainer } from './styled';
import { $homeCompilations } from '../effect';
import { Typography } from '@mui/material';
import { changeHomeOverlayColor } from '../overlay/effect';
import { useMemo } from 'react';
import PlayButton from '../../../components/buttons/PlayButton';
import { PlayButtonWrapper } from '../../../components/buttons/styled';
import { $mainContainer } from '../../../components/main/effect';
import { generateFeaturedColors } from '../../../utils/color';
import { useNavigate } from 'react-router-dom';

const HomeFeatured = () => {
  const compilations = useUnit($homeCompilations);
  const { width } = useUnit($mainContainer);

  const navigate = useNavigate();

  const colors = useMemo(() => generateFeaturedColors(), []);

  const breakpoint = width < 900;

  const handleOnMouseEnter = (color: string) => {
    changeHomeOverlayColor(color);
  };

  const handleOnMouseLeave = () => {
    changeHomeOverlayColor('#21115F');
  };

  return (
    <FeaturedContainer gridTemplateColumns={`repeat(${breakpoint ? 2 : 4}, 1fr)`}>
      {compilations?.featured?.map((f, i) => (
        <FeaturedCard
          key={f._id}
          onMouseEnter={() => handleOnMouseEnter(colors[i])}
          onMouseLeave={handleOnMouseLeave}
          onClick={() => navigate(`/${f._collection}/${f._id}`)}
          height={breakpoint ? '50px' : '80px'}
        >
          <FeaturedCardCover src={(f.cover || f.avatar) + '?w=160&h=160'} sx={{ aspectRatio: 1 }} />
          <Typography ml={1} fontWeight="600" fontSize={breakpoint ? '0.85rem' : '0.95rem'} truncate={2}>
            {f.name}
          </Typography>
          <PlayButtonWrapper right={8}>
            <PlayButton
              source={{ _id: f._id, type: f._collection }}
              size={breakpoint ? 32 : 48}
              title={f.name}
            />
          </PlayButtonWrapper>
        </FeaturedCard>
      ))}
    </FeaturedContainer>
  );
};

export default HomeFeatured;
