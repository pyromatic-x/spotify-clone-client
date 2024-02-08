import { Button, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledButton = styled(Button)(({ theme }) => ({
  width: "100%",
  padding: "0",
  minWidth: "max-content",
  "& span": {
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    textAlign: "start",
    transition: "0.3s ease",
  },
  "& svg": {
    fill: theme.palette.secondary.main,
    transition: "0.3s ease",
    fontSize: "2rem",
  },
  "& .MuiListItemIcon-root": {
    minWidth: "max-content",
  },

  "& .MuiTypography-root": {
    marginLeft: "10px",
  },

  "&:hover, &.active": {
    backgroundColor: "transparent",
    "& span": {
      color: "white",
    },
    "& svg": {
      fill: "white",
    },
  },
}));

StyledButton.defaultProps = {
  disableRipple: true,
};

export const LinkStyled = styled(Link)({
  width: "100%",
});
