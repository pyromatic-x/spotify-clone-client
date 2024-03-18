import { Button, Chip, Grid, styled } from "@mui/material";
import { HorizontalSplit as HorizontalSplitIcon } from "@mui/icons-material";

export const LibraryButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "isCollapsed",
})<{ isCollapsed?: boolean }>(({ theme, isCollapsed }) => ({
  padding: 0,
  color: theme.palette.secondary.main,
  fontWeight: "bold",
  fontSize: "18px",
  minWidth: "max-content",
  marginLeft: "5px",
  "&:hover": {
    backgroundColor: "transparent",
    color: "white",
  },
  "& .MuiButton-startIcon": {
    marginLeft: 0,
    "& svg": {
      fontSize: "2rem",
    },
  },
  "& svg": {
    fontSize: "2rem",
  },
  "&.shadow": {
    boxShadow: "6px 6px 10px 0 black",
    zIndex: 1,
  },

  ...(isCollapsed && {
    padding: "14px 0",
    position: "sticky",
    top: "0",
    width: "74px",
    marginLeft: "-11px",
    backgroundColor: "section",
  }),
}));

export const LibraryIcon = styled(HorizontalSplitIcon)({
  transform: "rotate(270deg)",
});

export const HeaderContainer = styled(Grid)(({ theme }) => ({
  position: "sticky",
  top: "0",
  rowGap: "16px",
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.background.section,
  width: "calc(100% + 18px)",
  margin: "0 -9px",
  padding: "14px",
  zIndex: 1,
  boxShadow: "0px 0px 0px 0 rgba(0, 0, 0, 0)",
  transition: "box-shadow 0.2s ease",

  "&.shadow": {
    boxShadow: "6px 6px 10px 0 rgba(0, 0, 0, 1)",
  },
}));

export const ChipStyled = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  "&.active": {
    backgroundColor: "white",
    color: "black",
  },
}));
