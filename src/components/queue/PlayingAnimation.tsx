import { Box } from "@mui/material";
import { AnimationLine } from "./styled";

const PlayingAnimation = () => (
  <Box
    component="div"
    sx={{
      display: "flex",
      width: "15px",
      height: "18px",
      gap: "1px",
      transform: "rotate(180deg)",
    }}
  >
    <AnimationLine animation="first" />
    <AnimationLine animation="second" />
    <AnimationLine animation="third" />
    <AnimationLine animation="fourth" />
  </Box>
);

export default PlayingAnimation;
