import { Grid, Typography } from '@mui/material';
import BrowseAll from '../components/browse/BrowseAll';
import { useSelector } from 'react-redux';
import Loader from '../components/browse/Loader';
import TopResult from '../components/browse/TopResult';
import TracksSection from '../components/common/cards/TracksSection';

function NothingFound({ value }: { value: string }) {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      height="100%"
      width="100%"
      flexWrap="nowrap"
      paddingX={4}
    >
      <Typography variant="h6" fontWeight="bold" textAlign="center">
        No results found for "{value}"
      </Typography>
      <Typography textAlign="center">
        Please make sure your words are spelled correctly, or use fewer or different keywords.
      </Typography>
    </Grid>
  );
}

function Browse() {
  document.title = 'Spotify - Browse';

  const { loading, top, albums, artists, playlists, tracks, episodes, podcasts, search, total } = useSelector(
    (state: any) => state.browse,
  );

  return <p>browse</p>;
  // return (
  // <Grid position="relative" container direction="column" gap={3.5} paddingBottom="18px" height="100%">
  //   {loading ? (
  //     <Loader />
  //   ) : search ? (
  //     total ? (
  //       <Grid container direction="column" gap={4}>
  //         <Grid container spacing={4}>
  //           <TopResult item={top} />
  //           {tracks.length && <TracksSection tracks={tracks} />}
  //         </Grid>
  //         {artists.length && (
  //           <CardsSection title={"Artists"} items={artists} showAll={false} imageType="circle" />
  //         )}
  //         {albums.length && <CardsSection title={"Albums"} items={albums} showAll={false} />}
  //         {playlists.length && <CardsSection title={"Playlists"} items={playlists} showAll={false} />}
  //         {podcasts.length && <CardsSection title={"Podcasts"} items={podcasts} showAll={false} />}
  //         {episodes.length && <CardsSection title={"Episodes"} items={episodes} showAll={false} />}
  //       </Grid>
  //     ) : (
  //       <NothingFound value={search} />
  //     )
  //   ) : (
  //     <BrowseAll />
  //   )}
  // </Grid>
  // );
}

export default Browse;
