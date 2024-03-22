import MainContainer from '../../common/MainContainer';
import Header from './header';
import LibraryList from './list/index';

const Library = () => (
  <MainContainer
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      justifyContent: 'start',
      overflowY: 'scroll',
      padding: '14px 14px 0 14px',
    }}
  >
    <Header />
    <LibraryList />
  </MainContainer>
);

export default Library;
