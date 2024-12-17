import { Box } from '@mui/material';

import { UnitPageProps } from './meta/types';
import { PropsWithChildren, useEffect } from 'react';
import UnitMeta from './meta';
import UnitPageControls from './controls';
import { dropMainAccent, dropMainSticky } from '../main/effect';

const UnitPage = ({ type, meta, children }: PropsWithChildren<UnitPageProps>) => {
  useEffect(
    () => () => {
      dropMainAccent();
      dropMainSticky();
    },
    [],
  );

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
