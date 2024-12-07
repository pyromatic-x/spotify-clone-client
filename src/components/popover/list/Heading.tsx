import { Typography } from '@mui/material';
import { IPopoverItem } from './types';
import { StyledPopoverItem } from './styled';

const PopoverHeading = ({ heading }: Extract<IPopoverItem, { heading: string }>) => (
  <StyledPopoverItem disabled>
    <Typography fontSize="0.7rem" fontWeight="600">
      {heading}
    </Typography>
  </StyledPopoverItem>
);

export default PopoverHeading;
