import { Box } from '@mui/material';

import UnitHeader from './header';
import { UnitHeaderProps } from './types';
import { PropsWithChildren } from 'react';

const UnitPage = ({ type, meta, children }: PropsWithChildren<UnitHeaderProps>) => {
  return (
    <>
      {type !== 'artist' && <UnitHeader meta={meta} type={type} />}
      <Box position="relative" zIndex={1} pb={7}>
        {children}
      </Box>
    </>
  );
};

export default UnitPage;
