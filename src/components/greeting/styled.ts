import { Box, Button, styled } from "@mui/material";
import backgroundImage from "../../assets/images/modal-background.png";

export const Content = styled(Box)(({ theme }) => ({
  maxWidth: "60%",
  position: "relative",

  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.grandis,
  color: theme.palette.text.gray,
  fontWeight: "bold",
  textTransform: "unset",
  borderRadius: "20px",
  padding: "5px 30px",

  "&:hover": {
    backgroundColor: theme.palette.grandis,
    color: theme.palette.text.gray,
    transform: "scale(1.05)",
  },

  "&:disabled": {
    color: "rgba(0, 0, 0, 0.3)",
    backgroundColor: "rgba(255, 204, 102, 0.7)",
  },
}));

export const Background = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundImage: `url(${backgroundImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundPosition: "110% 20px",
  opacity: "1",

  [theme.breakpoints.down("sm")]: {
    opacity: "0.3",
  },
}));
