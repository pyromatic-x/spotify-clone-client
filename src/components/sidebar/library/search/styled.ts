import { Box, FormControl, IconButton, TextField, styled } from "@mui/material";

export const Wrapper = styled(Box, { shouldForwardProp: (prop) => prop !== "moveLeft" })<{
  moveLeft: boolean;
}>(({ moveLeft = false }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "relative",
  width: "100%",
  left: 0,
  transition: "left 0.2s ease",

  ...(moveLeft && {
    left: "-124px",
  }),
}));

export const SearchContainer = styled(FormControl, {
  shouldForwardProp: (prop) => prop !== "moveLeft" && prop !== "hide",
})<{
  moveLeft: boolean;
  hide: boolean;
}>(({ moveLeft = false, hide = false }) => ({
  transition: "0.2s ease",
  width: moveLeft ? "150px" : "auto",
  opacity: "1",
  pointerEvents: "all",
  position: "absolute",

  ...(hide && {
    width: "0px",
    opacity: "0",
    pointerEvents: "none",
  }),
}));

export const StyledSearchInput = styled(TextField)({
  backgroundColor: "#292828",
  border: "none",
  borderRadius: "6px",
  maxWidth: "190px",

  "& .MuiInputBase-root": {
    height: "32px",
    borderRadius: "6px",
    padding: "0 5px",
  },

  "& svg": {
    fontSize: "1.3rem",
  },

  "& .MuiInputBase-input": {
    fontSize: "0.8rem",
  },

  "& .MuiInputAdornment-positionEnd svg": {
    cursor: "pointer",
  },

  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
});

export const StyledSearchButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "hide",
})<{
  hide: boolean;
}>(({ hide = false }) => ({
  padding: "0",
  minWidth: "auto",
  width: "31px",
  height: "32px",
  opacity: "1",
  pointerEvents: "all",
  transition: "0.2s ease",

  "& svg": {
    fontSize: "1.3rem",
  },

  ...(!hide && {
    opacity: "0",
    pointerEvents: "none",
  }),
}));
