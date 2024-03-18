import { Box } from "@mui/material";

type IProps = {
  color: string;
  loaded: boolean;
  type: "square" | "circle";
};

const Placeholder = ({ color, loaded, type }: IProps) => (
  <Box
    sx={{
      width: "100%",
      height: "100%",
      position: "absolute",
      zIndex: 1,
      top: "0",
      transition: "0.35s ease-out",
      opacity: loaded ? "0" : "1",
      borderRadius: type === "circle" ? "50%" : "4px",
      backgroundColor: color,
      filter: "brightness(0.5)",
    }}
  ></Box>
);

export default Placeholder;
