import { useEffect } from 'react';
import HomeWrapper from './HomeWrapper';
import { setBackgroundColor } from './effect';

const HomePodcasts = () => {
  useEffect(() => {
    setBackgroundColor('#2c2c2c');
  }, []);

  return (
    <HomeWrapper>
      <>podcasts</>
    </HomeWrapper>
  );
};

export default HomePodcasts;
