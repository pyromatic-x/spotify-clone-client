import {
  Button,
  FormControl,
  IconButton,
  TextField,
  styled,
} from "@mui/material";

export const SearchContainer = styled(FormControl)({
  transition: "0.2s ease",
  width: "190px",
  opacity: "1",
  pointerEvents: "all",
  position: "absolute",

  "&.hidden": {
    width: "0px",
    opacity: "0",
    pointerEvents: "none",
  },
});

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

export const StyledSortButton = styled(Button)({
  padding: "0",
  fontSize: "0.8rem",

  "&:hover": {
    backgroundColor: "transparent",
    color: "#ffffff",
  },

  "& .MuiButton-endIcon": {
    marginLeft: "6px",
  },
});

export const StyledSearchButton = styled(IconButton)({
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

  "&.hidden": {
    opacity: "0",
    pointerEvents: "none",
  },
});
