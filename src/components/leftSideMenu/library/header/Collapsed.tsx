import { Tooltip } from "@mui/material";
import { LibraryButton, LibraryIcon } from "./styled";
import { toggleLeftMenu } from "../../../../store/reducers/applicationSlice";
import { onSearch } from "../../../../store/reducers/librarySlice";
import { useDispatch } from "react-redux";

type IProps = {
  hasShadow: boolean;
  isCollapsed: boolean;
};

export default function HeaderCollapsed({ hasShadow, isCollapsed }: IProps) {
  const dispatch = useDispatch();

  function onToggleLeftMenu(collapse: boolean) {
    dispatch(toggleLeftMenu(null));
    if (collapse) {
      // @ts-ignore
      dispatchEvent(onSearch({ searchValue: null }));
    }
  }

  return (
    <Tooltip title="Expand Your Library">
      <LibraryButton
        className={hasShadow ? "shadow" : ""}
        disableRipple
        onClick={() => onToggleLeftMenu(false)}
        isCollapsed={isCollapsed}
      >
        <LibraryIcon />
      </LibraryButton>
    </Tooltip>
  );
}
