import { useUnit } from 'effector-react';
import { $currentTrack, nextTrack, onEnd, prevTrack } from '../effect';
import { useEffect } from 'react';
import { useGlobalAudioPlayer } from 'react-use-audio-player';

const VOLUME_STEP = 0.05;

const AudioHandler = () => {
  const { load, volume, playing, play, pause, setVolume, mute, src } = useGlobalAudioPlayer();

  const currentTrack = useUnit($currentTrack);

  useEffect(() => {
    load(currentTrack.audio, {
      autoplay: !!src,
      onend: () => onEnd(),
    });
  }, [load, currentTrack]);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();

        nextTrack();
      }
      if (event.key === 'ArrowLeft' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();

        prevTrack();
      }

      if (event.key === 'ArrowUp' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();

        if (volume > 0) mute(false);

        if (volume < 1) {
          const nextVolume = volume + VOLUME_STEP < 1 ? volume + VOLUME_STEP : 1;
          setVolume(nextVolume);
        }
      }
      if (event.key === 'ArrowDown' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();

        if (volume === 0) mute(true);

        if (volume > 0) {
          const nextVolume = volume - VOLUME_STEP > 0 ? volume - VOLUME_STEP : 0;
          setVolume(nextVolume);
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
