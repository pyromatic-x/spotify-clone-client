import { changeMenuWidth } from "../effect";
import { StyledResize } from "./styled";

const Resize = () => <StyledResize draggable onDragEnd={(e) => changeMenuWidth(e.pageX)} />;

export default Resize;
