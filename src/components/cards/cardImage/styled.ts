import { Box, SvgIcon, styled } from "@mui/material";
import { hexToRgbA } from "../../../utils/strings";

export const Waves = styled(SvgIcon, {
  shouldForwardProp: (prop) => prop !== "accent",
})<{ accent: string }>(({ accent }) => ({
  position: "absolute",
  top: 0,
  width: "100%",
  height: "100%",

  "& path": {
    fill: hexToRgbA(accent, 0.85),
  },
}));

export const Lines = styled(Box, {
  shouldForwardProp: (prop) => prop !== "color",
})<{ color: string }>(({ color }) => ({
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",

  "&::before": {
    content: "''",
    position: "absolute",
    left: "0",
    bottom: "18px",
    width: "4px",
    height: "20px",
    backgroundColor: color,
  },

  "&::after": {
    content: "''",
    position: "absolute",
    left: "0",
    bottom: "0",
    width: "100%",
    height: "4px",
    borderBottomLeftRadius: "4px",
    borderBottomRightRadius: "4px",
    backgroundColor: color,
  },

  "& .MuiTypography-root": {
    position: "absolute",
    bottom: "16px",
    left: "12px",
    fontSize: "0.9rem",
    fontWeight: "bold",
  },
}));
