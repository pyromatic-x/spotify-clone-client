import { Box, IconButton, styled } from "@mui/material";

export const StyledHeader = styled(Box, {
  shouldForwardProp: (prop) => prop !== "addBackground",
})<{ addBackground: boolean }>(({ theme, addBackground }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "nowrap",
  position: "relative",
  margin: "0 -18px",
  marginTop: "-18px",
  width: "calc(100% - -36px)",
  padding: "18px",
  background: addBackground
    ? theme.palette.background.purple
    : "rgba(0, 0, 0, 0)",
  borderTopRightRadius: "8px",
  borderTopLeftRadius: "8px",
  transition: "0.5s ease",
}));

export const StyledBackground = styled(Box, {
  shouldForwardProp: (prop) => prop !== "show",
})<{ show: boolean }>(({ show }) => ({
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "250px",
  opacity: show ? "0" : "0.8",
  transition: "1s ease-in-out",
  borderRadius: "8px",
  pointerEvents: "none",

  "&::before": {
    content: "''",
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: "8px",
    background:
      "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(18,18,18,1) 100%)",
  },
}));

export const NavigationButton = styled(IconButton)(() => ({
  backgroundColor: "black",
  width: "35px",
  height: "35px",
  "& svg": {
    fontSize: "1.2rem",
  },
}));
