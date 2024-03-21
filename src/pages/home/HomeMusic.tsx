import { useEffect } from 'react';
import HomeWrapper from './HomeWrapper';
import { resetBackgroundColor } from './effect';

const HomeMusic = () => {
  useEffect(() => {
    resetBackgroundColor();
  }, []);

  return (
    <HomeWrapper>
      <>music</>
    </HomeWrapper>
  );
};

export default HomeMusic;
