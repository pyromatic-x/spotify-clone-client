import Navigation from "./Navigation";
import Menu from "./Menu";
import Background from "./Background";
import { StyledHeader } from "./styles";

export default function Header({ addBackground }: { addBackground: boolean }) {
  return (
    <StyledHeader addBackground={addBackground}>
      <Background addBackground={addBackground} />
      <Navigation />
      <Menu />
    </StyledHeader>
  );
}
