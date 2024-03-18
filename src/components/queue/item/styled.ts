import { Box, Grid, Link, styled } from "@mui/material";

export const ListItemContainer = styled(Grid)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "28px 1fr 20% 36px 30px 40px",
  gap: "8px",
  alignItems: "center",
  padding: "6px 8px 6px 12px",
  borderRadius: "6px",
  cursor: "pointer",

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "28px 1fr auto auto auto",

    "& .queue-item-album": {
      display: "none",
    },
  },

  "&:hover": {
    backgroundColor: theme.palette.secondary.light,

    "& .MuiTypography-root": {
      color: theme.palette.text.primary,
    },

    "& .queue-item-menu-button": {
      opacity: 1,
    },
  },

  "& .queue-item-name": {
    display: "-webkit-box",
    WebkitLineClamp: "1",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },

  "& .MuiTypography-root": {
    fontSize: "0.9rem",

    "&.active": {
      color: theme.palette.green.main,
    },
  },
}));

export const StatusContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
});

export const AlbumLink = styled(Link)({
  display: "-webkit-box",
  WebkitLineClamp: "1",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
});
