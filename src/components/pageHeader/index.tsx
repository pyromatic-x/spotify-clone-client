import { Grid, Link, Typography } from '@mui/material';
import { HeaderBackdrop, Header, HeaderAuthorAvatar, HeaderContent, HeaderCover, HeaderName } from './styled';
import { useUnit } from 'effector-react';
import { $mainWidth } from '../../components/main/effect';
import { memo, SyntheticEvent, useEffect, useRef, useState } from 'react';
import { TPageHeaderMetaProps } from './types';
import tinycolor from 'tinycolor2';
import { getAccentFromImage } from '../../utils/color';

const darkenAccent = (accent?: string) => {
  if (!accent) return undefined;
  return tinycolor(accent).setAlpha(0.9).darken(25).toString();
};

const PageHeader = ({ name, accent, cover, author, tracksCount, avatar }: TPageHeaderMetaProps) => {
  const coverRef = useRef(null);

  const [nameFontSize, setNameFontSize] = useState(96);

  const [_accent, setAccent] = useState(darkenAccent(accent));

  const containerWidth = useUnit($mainWidth);

  const nameLength = name.length || 16;
  const isContainerNarrow = containerWidth < 600;

  useEffect(() => {
    let size = 96;

    if (containerWidth <= 600) size = 26;
    else if (containerWidth <= 700) size = 34;
    else if (containerWidth <= 900) size = 48;
    else if (containerWidth <= 1300) size = 66;

    if (nameLength > 24) size -= nameLength / 2.5;

    if (nameFontSize !== size) setNameFontSize(size);
  }, [containerWidth]);

  const onCoverLoad = (event: SyntheticEvent<HTMLImageElement>) => {
    const color = getAccentFromImage(event.currentTarget);
    if (color && !_accent) setAccent(color);
  };

  return (
    <>
      <HeaderBackdrop accent={_accent} height={isContainerNarrow ? '190px' : '340px'} />
      <Header pb={isContainerNarrow ? '30px' : '40px'} pt={isContainerNarrow ? '30px' : '80px'}>
        <HeaderCover
          ref={coverRef}
          src={cover || avatar + '?w=460&h=460'}
          size={isContainerNarrow ? '130px' : '230px'}
          onLoadCapture={onCoverLoad}
        />
        <HeaderContent>
          <Typography fontSize="0.85rem">Playlist</Typography>
          <HeaderName truncate={3} maxWidth="100%" fontSize={nameFontSize + 'px'}>
            {name}
          </HeaderName>
          {author && (
            <Grid container alignItems="center">
              <HeaderAuthorAvatar src={author.avatar + '?w=48&h=48'} />
              <Link fontSize="0.85rem">{author?.name}</Link>
              <Typography color="secondary" fontSize="0.85rem">
                &nbsp;{`🞄 ${tracksCount} songs`}
              </Typography>
            </Grid>
          )}
        </HeaderContent>
      </Header>
    </>
  );
};

export default memo(PageHeader);
