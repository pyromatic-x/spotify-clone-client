import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { $mainContainer } from './effect';
import { useUnit } from 'effector-react';
import { MainStickyContainer, MainStickyContainerTitle } from './styled';
import tinycolor from 'tinycolor2';
import PlayButton from '../buttons/PlayButton';

const MainSticky = () => {
  const { width, scroll, accent, sticky } = useUnit($mainContainer);

  const [position, setPosition] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (sticky?.ref.current) {
      const position = sticky.ref.current.getBoundingClientRect().top;
      if (position > 0) setPosition(position);
    }

    if (!sticky) setShow(false);
  }, [sticky?.ref, width]);

  useEffect(() => {
    if (scroll > 0) {
      if (width < 600) setShow(scroll > position / 2);
      else setShow(scroll + 58 > position);
    }
  }, [scroll]);

  if (!sticky) return <></>;

  const { _id, name, type } = sticky;

  return (
    <MainStickyContainer
      width={width + 'px'}
      sx={{
        opacity: show ? 1 : 0,
        pointerEvents: show ? 'all' : 'none',
      }}
    >
      <MainStickyContainerTitle
        width="100%"
        height="100%"
        sx={{
          backgroundColor: '#' + tinycolor(accent).darken(25).toHex(),
          pointerEvents: show ? 'all' : 'none',
        }}
      >
        {type !== 'user' && <PlayButton title={name} source={{ type, _id }} />}
        <Typography fontWeight="bold" fontSize="1.5rem">
          {name}
        </Typography>
      </MainStickyContainerTitle>
    </MainStickyContainer>
  );
};

export default MainSticky;
