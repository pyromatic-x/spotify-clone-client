import { Grid, Link, Typography } from '@mui/material';
import { HeaderBackdrop, Header, HeaderAuthorAvatar, HeaderContent, HeaderCover, HeaderName } from './styled';
import { useUnit } from 'effector-react';
import { SyntheticEvent, useEffect, useRef, useState } from 'react';
import tinycolor from 'tinycolor2';
import { getAccentFromImage } from '../../../utils/color';
import { $mainWidth } from '../../main/effect';
import { PlaylistPageDto } from '../../../api/dto/playlist';
import { AlbumPageDto } from '../../../api/dto/album';
import { UserPageDto } from '../../../api/dto/user';
import { UnitHeaderProps } from '../types';

const darkenAccent = (accent?: string) => {
  if (!accent) return undefined;
  return tinycolor(accent).setAlpha(0.9).darken(20).toString();
};

const UnitHeaderCover = ({ type, meta }: UnitHeaderProps) => {
  const coverRef = useRef(null);

  const [nameFontSize, setNameFontSize] = useState(96);
  const [_accent, setAccent] = useState(darkenAccent(meta?.accent));

  const containerWidth = useUnit($mainWidth);

  const nameLength = meta?.name?.length || meta?.username?.length || 16;
  const isContainerNarrow = containerWidth < 600;

  useEffect(() => {
    let size = 92;

    if (containerWidth <= 600) size = 36;
    else if (containerWidth <= 700) size = 42;
    else if (containerWidth <= 900) size = 52;
    else if (containerWidth <= 1300) size = 62;
    else if (containerWidth <= 1500) size = 78;

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
          src={meta?.cover || meta?.avatar + '?w=460&h=460'}
          size={isContainerNarrow ? '130px' : '230px'}
          onLoadCapture={onCoverLoad}
        />
        {type === 'playlist' && (
          <PlaylistContent {...(meta as PlaylistPageDto['meta'])} nameFontSize={nameFontSize} />
        )}
        {type === 'album' && <AlbumContent {...(meta as AlbumPageDto['meta'])} nameFontSize={nameFontSize} />}
        {type === 'user' && <UserContent {...(meta as UserPageDto['meta'])} nameFontSize={nameFontSize} />}
      </Header>
    </>
  );
};

const PlaylistContent = ({
  name,
  author,
  tracksCount,
  nameFontSize,
}: { nameFontSize: number } & PlaylistPageDto['meta']) => {
  return (
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
  );
};
const AlbumContent = ({
  name,
  author,
  tracksCount,
  nameFontSize,
  releasedAt,
}: { nameFontSize: number } & AlbumPageDto['meta']) => {
  return (
    <HeaderContent>
      <Typography fontSize="0.85rem">Album</Typography>
      <HeaderName truncate={3} maxWidth="100%" fontSize={nameFontSize + 'px'}>
        {name}
      </HeaderName>
      <Grid container alignItems="center">
        <HeaderAuthorAvatar src={author.avatar + '?w=48&h=48'} />
        <Link fontSize="0.85rem">{author?.name}</Link>
        <Typography color="secondary" fontSize="0.85rem">
          &nbsp;{`🞄 ${new Date(releasedAt).getFullYear()} 🞄 ${tracksCount} songs`}
        </Typography>
      </Grid>
    </HeaderContent>
  );
};

const UserContent = ({ username, nameFontSize }: { nameFontSize: number } & UserPageDto['meta']) => {
  return (
    <HeaderContent>
      <Typography fontSize="0.85rem">Profile</Typography>
      <HeaderName truncate={3} maxWidth="100%" fontSize={nameFontSize + 'px'}>
        {username}
      </HeaderName>
      <Grid container alignItems="center">
        {/* <HeaderAuthorAvatar src={avatar + '?w=48&h=48'} />
        <Link fontSize="0.85rem">{author?.name}</Link>
        <Typography color="secondary" fontSize="0.85rem">
          &nbsp;{`🞄 ${new Date(createdAt).getFullYear()} songs 🞄 ${tracksCount} songs`}
        </Typography> */}
      </Grid>
    </HeaderContent>
  );
};

export default UnitHeaderCover;
