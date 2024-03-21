import { useEffect } from 'react';
import RecommendedSection from '../../components/home/Recommended';
import Sections from '../../components/home/Sections';
import HomeWrapper from './HomeWrapper';
import { resetBackgroundColor } from './effect';

const Home = () => {
  useEffect(() => {
    resetBackgroundColor();
  }, []);

  return (
    <HomeWrapper>
      <>
        <RecommendedSection />
        <Sections />
      </>
    </HomeWrapper>
  );
};

export default Home;
