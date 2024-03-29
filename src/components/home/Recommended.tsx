import { Box } from '@mui/material';
import WideCard from '../common/cards/wide';
import { useUnit } from 'effector-react';
import { $outletWidth } from '../root/effect';
import { HOME_RECOMMENDED } from '../../api/mock/home';

const RecommendedSection = () => {
  const outletWidth = useUnit($outletWidth);

  return (
    <Box display="grid" gridTemplateColumns={`repeat(${outletWidth < 950 ? 2 : 4}, auto)`} gap={1.5}>
      {HOME_RECOMMENDED.map((t) => (
        <WideCard {...t} key={t.id} />
      ))}
    </Box>
  );
};

export default RecommendedSection;
