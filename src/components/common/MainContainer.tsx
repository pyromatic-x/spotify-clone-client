import { Box, SxProps } from "@mui/material";
import { ReactNode } from "react";

type IProps = {
  children: ReactNode;
  sx: SxProps;
};

const MainContainer = ({ children, sx = {} }: IProps) => (
  <Box
    sx={{
      borderRadius: "8px",
      backgroundColor: "background.section",
      padding: "14px",
      ...sx,
    }}
  >
    {children}
  </Box>
);

export default MainContainer;
