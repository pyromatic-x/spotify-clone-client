import { Grid, Slider, Typography } from '@mui/material';
import { useGlobalAudioPlayer } from 'react-use-audio-player';
import { formatDuration } from '../../../utils/time';
import { useEffect, useRef, useState } from 'react';

const Seeker = () => {
  const ref = useRef(null);

  const { seek, getPosition, duration, playing, play } = useGlobalAudioPlayer();

  const [position, setPosition] = useState(0);
  const [isSeekStarted, setIsSeekStarted] = useState(false);
  const [seekingPosition, setSeekingPosition] = useState(0);

  useEffect(() => {
    const animate = () => {
      setPosition(getPosition());
      // @ts-expect-error err
      ref.current = requestAnimationFrame(animate);
    };

    // @ts-expect-error err
    ref.current = window.requestAnimationFrame(animate);

    return () => {
      if (ref.current) {
        cancelAnimationFrame(ref.current);
      }
    };
  }, []);

  const handleOnChange = (event: any) => {
    setIsSeekStarted(true);
    setSeekingPosition(event.target.value);
  };
  const handleOnChangeCommitted = () => {
    setIsSeekStarted(false);
    seek(seekingPosition);
    setSeekingPosition(0);

    if (!playing) play();
  };

  return (
    <Grid container columnGap={1} wrap="nowrap" alignItems="center">
      <Typography fontSize="12px" color="secondary" lineHeight={1}>
        {formatDuration(isSeekStarted ? seekingPosition : position)}
      </Typography>
      <Slider
        ref={ref}
        value={isSeekStarted ? seekingPosition : position}
        step={1}
        max={duration}
        onChange={handleOnChange}
        onChangeCommitted={handleOnChangeCommitted}
      />
      <Typography fontSize="12px" color="secondary" lineHeight={1}>
        {formatDuration(duration)}
      </Typography>
    </Grid>
  );
};

export default Seeker;
