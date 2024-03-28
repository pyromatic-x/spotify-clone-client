import { useEffect } from 'react';
import HomeWrapper from './HomeWrapper';
import { setBackgroundColor } from './effect';
import theme from '../../theme';

const HomePodcasts = () => {
  useEffect(() => {
    setBackgroundColor(theme.palette.hover.track);
  }, []);

  return (
    <HomeWrapper>
      <>podcasts</>
    </HomeWrapper>
  );
};

export default HomePodcasts;
