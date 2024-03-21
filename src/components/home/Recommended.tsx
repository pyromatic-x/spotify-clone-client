import { Box } from '@mui/material';
import { recommended } from './constants';
import WideCard from '../common/cards/wide';
import { useUnit } from 'effector-react';
import { $outletWidth } from '../root/effect';

const RecommendedSection = () => {
  const outletWidth = useUnit($outletWidth);

  return (
    <Box display="grid" gridTemplateColumns={`repeat(${outletWidth < 750 ? 1 : 3}, auto)`} gap={1.5}>
      <WideCard title="Liked Songs" />
      {recommended.map((t, i) => (
        <WideCard {...t} key={t.title + i} />
      ))}
    </Box>
  );
};

export default RecommendedSection;
