import { useLocation } from 'react-router-dom';
import { IRoute, ROUTES } from '../../../router/constants';
import { Box } from '@mui/material';
import { useEffect, useRef } from 'react';
import { DEFAULT_HEADER_HEIGHT, setHeaderHeight } from '../effect';

const Extensions = () => {
  const location = useLocation();
  const ref = useRef<HTMLDivElement>(null);

  const { HEADER_EXTENSION } = Object.keys(ROUTES)
    .map((key: any) => ROUTES[key])
    .find((t) => t.PATH === location.pathname) as IRoute;

  useEffect(() => {
    if (ref.current) {
      setHeaderHeight(DEFAULT_HEADER_HEIGHT + ref.current.clientHeight);
    }
  });

  const area = `extension-${HEADER_EXTENSION?.PLACEMENT ?? 'built-in'}`;

  return (
    <Box gridArea={area} ref={ref}>
      {!!HEADER_EXTENSION && HEADER_EXTENSION.ELEMENT}
    </Box>
  );
};

export default Extensions;
