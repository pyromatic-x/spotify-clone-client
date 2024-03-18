import { useSelector } from "react-redux";
import HeaderCollapsed from "./Collapsed";
import HeaderFull from "./Full";

function Header({ hasShadow }: any) {
  const { leftMenuCollapsed } = useSelector((state: any) => state.application);

  return leftMenuCollapsed ? (
    <HeaderCollapsed hasShadow={hasShadow} isCollapsed={leftMenuCollapsed} />
  ) : (
    <HeaderFull hasShadow={hasShadow} />
  );
}

export default Header;
