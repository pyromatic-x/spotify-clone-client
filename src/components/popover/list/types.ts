import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

type IPopoverItemDefault = {
  label: string;
  disabled?: boolean;
  active?: boolean;
  icons?: {
    left: OverridableComponent<SvgIconTypeMap<object, 'svg'>>;
    right: OverridableComponent<SvgIconTypeMap<object, 'svg'>>;
  };
  onClick: () => void;
};

type IPopoverItemHeading = { heading: string };
type IPopoverItemCustom = { element: () => JSX.Element };

export type IPopoverItem = IPopoverItemDefault | IPopoverItemHeading | IPopoverItemCustom;

export interface IPopoverList {
  items: Array<IPopoverItem>;
  /**
   * Array of indexes after which will be inserted a divider.
   */
  dividers?: Array<number>;
}
