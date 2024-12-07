import { Box, Grid } from '@mui/material';
import { IPopoverItem, IPopoverList } from './types';
import { StyledPopoverDivider } from './styled';
import PopoverItem from './Item';
import PopoverHeading from './Heading';

const isHeadingVariant = (item: IPopoverItem): item is Extract<IPopoverItem, { heading: string }> =>
  'heading' in item;
const isCustomVariant = (item: IPopoverItem): item is Extract<IPopoverItem, { element: () => JSX.Element }> =>
  'element' in item;

const PopoverList = ({ items, dividers }: IPopoverList) => {
  return (
    <Grid container flexDirection="column" width="max-content" minWidth="160px">
      {items.map((item, index) => {
        if (isHeadingVariant(item)) return <PopoverHeading {...item} key={item.heading + '_' + index} />;
        if (isCustomVariant(item)) {
          const Element = item.element;
          return <Element key={'popover-custom-element: ' + Element.name} />;
        }

        return (
          <Box key={item.label + '_' + index}>
            <PopoverItem {...item} />
            {dividers?.length && dividers.find((d) => d === index) && <StyledPopoverDivider />}
          </Box>
        );
      })}
    </Grid>
  );
};

export default PopoverList;
