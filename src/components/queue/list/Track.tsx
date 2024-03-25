import { Box, Grid, IconButton, Tooltip } from '@mui/material';
import { IconWrapper, MoreWrapper, StyledListItem } from './styled';
import { ImageBase } from '../../common/images/styled';
import { Link, TextTruncated } from '../../common/text/styled';
import { useGlobalAudioPlayer } from 'react-use-audio-player';
import { MoreHoriz, Pause, PlayArrow } from '@mui/icons-material';
import { setCurrentTrackFromQueue } from '../../audiobar/effect';

type IProps = {
  track: any;
  index: number;
  selected: boolean;
  firstSelected: boolean;
  lastSelected: boolean;
  draggable?: boolean;

  handleOnSelect: (shiftKey: boolean, selectedIndex: number) => void;
  handleOnDragStart: (event: React.DragEvent<HTMLLIElement>, id: string) => void;
  handleDropEffect: (target?: HTMLElement | Element | null, isEnd?: boolean) => void;
};

const Track = ({
  track,
  index,
  selected,
  firstSelected,
  lastSelected,
  draggable,
  handleDropEffect,
  handleOnDragStart,
  handleOnSelect,
}: IProps) => {
  const isCurrent = !!track._current;
  const { playing, pause, play } = useGlobalAudioPlayer();

  const onDragStartProp = draggable
    ? {
        onDragStart: (e: React.DragEvent<HTMLLIElement>) => handleOnDragStart(e, track.id),
        onDragEnd: () => handleDropEffect(null, true),
      }
    : {};

  const handleOnPlay = () => {
    if (isCurrent) play();
    else setCurrentTrackFromQueue(track.id);
  };

  const Icon = playing && isCurrent ? Pause : PlayArrow;

  let IconAction = handleOnPlay;
  if (playing && isCurrent) IconAction = pause;

  return (
    <StyledListItem
      key={track.id}
      selected={selected}
      firstSelected={firstSelected}
      lastSelected={lastSelected}
      onClick={(event) => handleOnSelect(event.shiftKey, index)}
      draggable={!!draggable}
      {...onDragStartProp}
      aria-rowindex={index}
      aria-label="queue-list-track"
      id={track.id}
    >
      <Box mr="8px" position="relative">
        <ImageBase src={track.cover} alt={track.title} radius="4px" sx={{ width: '50px' }} />
        <IconWrapper>
          <Icon onClick={() => IconAction()} />
        </IconWrapper>
      </Box>
      <Grid container flexDirection="column">
        <TextTruncated
          maxWidth="80%"
          lines={1}
          fontSize="0.9rem"
          color={track._current && 'green.main'}
          fontWeight={500}
        >
          {track.name}
        </TextTruncated>
        <Grid container>
          {track.authors.map((author: string, index: number) => (
            <TextTruncated
              maxWidth="80%"
              lines={1}
              fontSize="0.8rem"
              color="secondary"
              key={author}
              fontWeight={500}
            >
              <Link to="">
                {author}
                {index !== track.authors.length - 1 && <>,&nbsp;</>}
              </Link>
            </TextTruncated>
          ))}
        </Grid>
      </Grid>
      <MoreWrapper>
        <Tooltip title={`More options for ${track.name}`} placement="top-end">
          <IconButton disableTouchRipple disableRipple>
            <MoreHoriz />
          </IconButton>
        </Tooltip>
      </MoreWrapper>
    </StyledListItem>
  );
};

export default Track;
