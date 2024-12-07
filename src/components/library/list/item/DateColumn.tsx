import { Typography, TypographyProps } from '@mui/material';
import { getDateDiff } from '../../utils';

interface DateColumnProps extends TypographyProps {
  date?: string;
}

const DateColumn = ({ date, justifyContent }: DateColumnProps) => (
  <Typography
    color="secondary"
    fontSize="0.9rem"
    display="inline-flex"
    alignItems="center"
    justifyContent={justifyContent}
  >
    {getDateDiff(date)}
  </Typography>
);

export default DateColumn;
