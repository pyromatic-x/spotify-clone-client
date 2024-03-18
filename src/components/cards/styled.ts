import { Box, Card, SvgIcon, Typography, styled } from "@mui/material";
import { hexToRgbA } from "../../utils/strings";

export const StyledRectangularCard = styled(Card)(({ theme }) => ({
  height: "100%",
  padding: "18px",
  backgroundColor: theme.palette.background.card,
  transition: "0.25s ease",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: theme.palette.background.cardHover,

    "& .MuiIconButton-root": {
      opacity: "1",
    },
  },
}));

export const StyledSearchCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== "color",
})<{ color: string }>(({ color }) => ({
  aspectRatio: "1",
  position: "relative",
  cursor: "pointer",
  backgroundColor: color,

  "& .MuiCardMedia-root": {
    position: "absolute",
    right: "-5%",
    bottom: "-5%",
    height: "50%",
    width: "50%",
    transform: "rotate(30deg)",
    borderRadius: "6px",
  },
}));

export const StyledTrackCard = styled(Typography)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 36px 30px 40px",
  gap: "8px",
  alignItems: "center",
  padding: "6px 8px 6px 8px",
  borderRadius: "6px",
  cursor: "pointer",

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr auto auto auto",
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
  },
}));

export const StyledWideCard = styled(Card)({
  display: "flex",
  height: "80px",
  cursor: "pointer",
  backgroundColor: "transparent",

  "& .MuiCardContent-root": {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(179,179,179, 0.1)",
    transition: "0.2s ease",
    "&:hover": {
      backgroundColor: "rgba(255,255,255, 0.15);",
    },
  },

  "&:hover .MuiIconButton-root": {
    opacity: "1",
  },

  "& img": {
    maxWidth: "80px",
  },

  "& .MuiCardContent-root:last-child": {
    paddingBottom: "16px",
  },
});

export const LikedSongsImage = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "80px",
  heigh: "100%",
  background:
    "linear-gradient(135deg, rgba(63,19,185,1) 0%, rgba(124,146,135,1) 100%)",
});

export const WideCardMediaContainer = styled(Box)({
  minWidth: "80px",
  height: "80px",
  position: "relative",
});

export const WideCardMediaBackground = styled(SvgIcon, {
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

export const TextTruncated = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "lines",
})<{ lines?: number }>(({ lines = 2 }) => ({
  display: "-webkit-box",
  WebkitLineClamp: lines,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
}));
