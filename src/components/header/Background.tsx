import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { StyledBackground } from "./styles";

export default function Background({
  addBackground,
}: {
  addBackground: boolean;
}) {
  const location = useLocation();
  const color = useSelector(
    (state: any) => state.application.homePageBackground
  );

  return (
    location.pathname === "/" && (
      <StyledBackground bgcolor={color} show={addBackground} />
    )
  );
}
