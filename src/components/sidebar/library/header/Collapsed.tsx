import { Tooltip } from "@mui/material";
import { LibraryButton, LibraryIcon } from "./styled";
import { changeMenuWidth } from "../../effect";
import { menuConfig } from "../../constants";

const Collapsed = () => (
  <Tooltip title="Expand Your Library">
    <LibraryButton disableRipple onClick={() => changeMenuWidth(menuConfig.defaultWidth)}>
      <LibraryIcon />
    </LibraryButton>
  </Tooltip>
);

export default Collapsed;
