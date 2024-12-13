import { Grid, Link, Typography } from '@mui/material';
import { HeaderBackdrop, Header, HeaderAuthorAvatar, HeaderContent, HeaderCover, HeaderName } from './styled';
import { useUnit } from 'effector-react';
import { $mainWidth } from '../../components/main/effect';
import { memo, useEffect, useRef, useState } from 'react';
import { TPageHeaderMetaProps } from './types';

const PageHeader = ({ name, accent, cover, author, tracksCount }: TPageHeaderMetaProps) => {
  const coverRef = useRef(null);

  const [isLoaded, setIsLoaded] = useState(false);
  const [nameFontSize, setNameFontSize] = useState(96);

  const containerWidth = useUnit($mainWidth);

  const nameLength = name.length || 16;

  const isContainerNarrow = containerWidth < 600;

  useEffect(() => {
    let size = 96;

    if (containerWidth <= 600) size = 26;
    else if (containerWidth <= 700) size = 34;
    else if (containerWidth <= 900) size = 48;
    else if (containerWidth <= 1200) size = 66;

    if (nameLength > 24) size -= nameLength / 2.5;

    if (nameFontSize !== size) setNameFontSize(size);
  }, [containerWidth]);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <>
      <HeaderBackdrop accent={accent} height={isContainerNarrow ? '190px' : '340px'} />
      <Header
        pb={isContainerNarrow ? '30px' : '40px'}
        pt={isContainerNarrow ? '30px' : '80px'}
        sx={{ opacity: isLoaded ? 1 : 0 }}
      >
        <HeaderCover
          ref={coverRef}
          src={cover + '?w=460&h=460'}
          onLoad={handleImageLoad}
          size={isContainerNarrow ? '130px' : '230px'}
        />
        <HeaderContent>
          <Typography fontSize="0.85rem">Playlist</Typography>
          <HeaderName truncate={3} maxWidth="100%" fontSize={nameFontSize + 'px'}>
            {name}
          </HeaderName>
          <Grid container alignItems="center">
            <HeaderAuthorAvatar src={author.avatar + '?w=48&h=48'} />
            <Link fontSize="0.85rem">{author?.name}</Link>
            <Typography color="secondary" fontSize="0.85rem">
              &nbsp;{`🞄 ${tracksCount} songs`}
            </Typography>
          </Grid>
        </HeaderContent>
      </Header>
    </>
  );
};

export default memo(PageHeader);
