import { useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

const useBreakpoint = (): Breakpoint => {
  const [bp, setBp] = useState<Breakpoint>('lg');
  const theme = useTheme();

  const mq_xs = useMediaQuery(theme.breakpoints.only('xs'));
  const mq_sm = useMediaQuery(theme.breakpoints.only('sm'));
  const mq_md = useMediaQuery(theme.breakpoints.only('md'));
  const mq_lg = useMediaQuery(theme.breakpoints.only('lg'));
  const mq_xl = useMediaQuery(theme.breakpoints.only('xl'));
  const mq_xxl = useMediaQuery(theme.breakpoints.only('xxl'));

  useEffect(() => {
    if (mq_xs) setBp('xs');
    if (mq_sm) setBp('sm');
    if (mq_md) setBp('md');
    if (mq_lg) setBp('lg');
    if (mq_xl) setBp('xl');
    if (mq_xxl) setBp('xxl');
  }, [mq_xs, mq_sm, mq_md, mq_lg, mq_xl, mq_xxl]);

  return bp;
};

export default useBreakpoint;
