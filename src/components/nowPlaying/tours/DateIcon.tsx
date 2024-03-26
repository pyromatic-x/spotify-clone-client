import { Typography } from '@mui/material';
import { DateIconContainer } from './styled';

const DateIcon = ({ month, day }: { month: string; day: string }) => {
  return (
    <DateIconContainer>
      <Typography fontSize="0.8rem" lineHeight="1.2">
        {month}
      </Typography>
      <Typography fontSize="1.6rem" lineHeight="1.1" fontWeight="bold">
        {day}
      </Typography>
    </DateIconContainer>
  );
};

export default DateIcon;
