import { useEffect } from 'react';
import Sections from '../../components/home/Sections';
import HomeWrapper from './HomeWrapper';
import { resetBackgroundColor } from './effect';
import RecommendedSection from '../../components/home/Recommended';

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
