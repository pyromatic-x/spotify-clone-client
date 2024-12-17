import { useUnit } from 'effector-react';
import { useEffect, useMemo } from 'react';
import { useGlobalAudioPlayer } from 'react-use-audio-player';
import { $muted, $queue, $volume, changeVolume, next, prev } from '../effect';

// const VOLUME_STEP = 0.05;

const AudioHandler = () => {
  const queue = useUnit($queue);
  const volume = useUnit($volume);
  const muted = useUnit($muted);

  const { load, src, stop, play, pause, playing } = useGlobalAudioPlayer();

  const current = useMemo(() => queue?.tracks[queue?.current], [queue?.current, queue?.tracks]);

  useEffect(() => {
    if (!current) return;

    stop();
    load(current.url, {
      autoplay: !!src,
      onend: () => next(),
      html5: true,
      format: 'flac',
      initialVolume: volume,
      initialMute: muted,
    });
  }, [load, current]);

  useEffect(() => {
    const VOLUME_STEP = 0.05;

    const handler = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();

        next();
      }
      if (event.key === 'ArrowLeft' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();

        prev();
      }

      if (event.key === 'ArrowUp' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();

        if (volume < 1) {
          const nextVolume = volume + VOLUME_STEP < 1 ? volume + VOLUME_STEP : 1;
          changeVolume(nextVolume);
        }
      }
      if (event.key === 'ArrowDown' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();

        if (volume > 0) {
          const nextVolume = volume - VOLUME_STEP > 0 ? volume - VOLUME_STEP : 0;
          changeVolume(nextVolume);
        }
      }

      // @ts-expect-error error
      if (event?.target?.nodeName !== 'INPUT' && event.code === 'Space') {
        event.preventDefault();

        if (playing) pause();
        else play();
      }
    };

    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  });

  return null;
};

export default AudioHandler;
