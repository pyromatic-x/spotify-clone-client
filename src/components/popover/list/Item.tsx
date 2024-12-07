import { Grid, Typography } from '@mui/material';
import { Check as CheckIcon } from '@mui/icons-material';
import { IPopoverItem } from './types';
import { StyledPopoverItem } from './styled';

const PopoverItem = ({
  label,
  active,
  disabled,
  onClick,
  icons,
}: Extract<IPopoverItem, { label: string }>) => {
  const LeftIcon = icons?.left;
  // const RightIcon = icons?.right;

  return (
    <StyledPopoverItem active={!!active} disabled={!!disabled} onClick={onClick}>
      <Grid container alignItems="center" gap={0.5}>
        {LeftIcon && <LeftIcon sx={{ fontSize: '1.2rem' }} />}
        <Typography fontSize="0.85rem" lineHeight={1}>
          {label}
        </Typography>
      </Grid>
      {!!active && <CheckIcon sx={{ fontSize: '1.2rem' }} />}
      {/* {LeftIcon && <LeftIcon />} */}
    </StyledPopoverItem>
  );
};

export default PopoverItem;
