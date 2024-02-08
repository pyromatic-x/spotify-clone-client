import { Box, styled } from "@mui/material";

export const RootContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  gridTemplateRows: "102px 1fr 92px",
  columnGap: "8px",
  padding: "14px 14px 0 14px",
  height: "100vh",

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "100%",
  },
}));

export const StyledOutletContainer = styled(Box)({
  height: "calc(100% - 56px)",
  overflow: "scroll",
  width: "calc(100% - -36px)",
  margin: "0 -18px",
  padding: "0 18px",
});
