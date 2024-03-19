import { Box, styled } from "@mui/material";
import { menuConfig } from "./constants";

export const Container = styled(Box, {
  shouldForwardProp: (prop) => prop !== "resizedWidth",
})<{ resizedWidth: number }>(({ resizedWidth }) => ({
  maxWidth: menuConfig.maxWidth,
  minWidth: menuConfig.minWidth,
  width: `${resizedWidth}px`,
  height: "100%",
  gridRow: "span 2",
  display: "flex",
}));
