import { Box } from '@mui/material';

import { UnitPageProps } from './meta/types';
import { PropsWithChildren } from 'react';
import UnitMeta from './meta';
import UnitPageControls from './controls';

const UnitPage = ({ type, meta, children }: PropsWithChildren<UnitPageProps>) => {
  return (
    <>
      <UnitMeta meta={meta} type={type} />
      <UnitPageControls meta={meta} type={type} />
      <Box position="relative" zIndex={1} pb={7}>
        {children}
      </Box>
    </>
  );
};

export default UnitPage;
