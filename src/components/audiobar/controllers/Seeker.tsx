import { Grid, Slider, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useGlobalAudioPlayer } from 'react-use-audio-player';
import { formatDuration } from '../../../utils/time';
import { useUnit } from 'effector-react';
import { $queue, next } from '../effect';

const AudiobarSeeker = () => {
  const ref = useRef(null);
  const frameRef = useRef<number>();

  const [position, setPosition] = useState(0);
  const [isSeekStarted, setIsSeekStarted] = useState(false);
  const [seekingPosition, setSeekingPosition] = useState(0);

  const queue = useUnit($queue);
  const current = queue?.tracks.find((t, i) => i === queue?.current);

  const { seek, duration, getPosition } = useGlobalAudioPlayer();

  useEffect(() => setPosition(0), [current]);
  next.watch(() => setPosition(0));

  useEffect(() => {
    const animate = () => {
      setPosition(getPosition());
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [getPosition]);

  const handleOnChange = (event: any) => {
    setIsSeekStarted(true);
    setSeekingPosition(event.target.value);
  };
  const handleOnChangeCommitted = () => {
    setIsSeekStarted(false);
    seek(seekingPosition);
    setSeekingPosition(0);
    setPosition(seekingPosition);
  };

  return (
    <Grid container alignItems="center" justifyContent="center" wrap="nowrap" gap={1.5}>
      <Typography color="secondary" fontSize="0.85rem" whiteSpace="nowrap">
        {formatDuration(queue ? (isSeekStarted ? seekingPosition : position) : undefined)}
      </Typography>
      <Slider
        ref={ref}
        value={isSeekStarted ? seekingPosition : position}
        step={1}
        max={duration}
        onChange={handleOnChange}
        onChangeCommitted={handleOnChangeCommitted}
        disabled={!queue}
      />
      <Typography color="secondary" fontSize="0.85rem" whiteSpace="nowrap">
        {formatDuration(duration || current?.duration)}
      </Typography>
    </Grid>
  );
};

export default AudiobarSeeker;
