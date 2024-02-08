import { Typography } from "@mui/material";
import Logo from "../../../assets/icons/Logo";

import { ReactComponent as BackgroundIcon } from "../../../assets/svg/widecard-bg-path.svg";
import { Lines, Waves } from "./styled";

type IProps = {
  color: string;
  text: string;
  style: "waves" | "lines";
  isColorBright?: boolean;
};

const VisualEffect = ({ color, text, isColorBright, style }: IProps) => {
  if (!style) return null;

  return style === "lines" ? (
    <Lines color={color}>
      <Typography color="white">{text}</Typography>
    </Lines>
  ) : (
    <>
      <Waves accent={color} viewBox="0 0 80 80">
        <BackgroundIcon />
      </Waves>
      <Logo
        size="13px"
        sx={{
          display: "block",
          position: "absolute",
          top: "6px",
          left: "6px",
          "& path": { fill: isColorBright ? "black" : "" },
        }}
      />
      <Typography
        sx={{
          position: "absolute",
          bottom: "8px",
          left: "12px",
          fontSize: "12px",
          fontWeight: "bold",
          color: isColorBright ? "black" : "",
        }}
      >
        {text}
      </Typography>
    </>
  );
};

export default VisualEffect;
