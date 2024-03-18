import { styled } from "@mui/material";
import { Link } from "react-router-dom";

export const Item = styled(Link, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>(({ theme, active = false }) => ({
  width: "max-content",
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  textDecoration: "none",
  color: active ? theme.palette.common.white : theme.palette.secondary.main,
  transition: "all 0.3s ease",

  "& .MuiSvgIcon-root": {
    fontSize: "2rem",
  },
}));
