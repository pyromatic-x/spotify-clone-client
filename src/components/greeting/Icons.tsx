import { Box, Grid } from "@mui/material";
import { ReactNode } from "react";

export default function Icons({ icons }: { icons: Array<ReactNode> }) {
  return (
    <Grid ml={1} sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
      {icons.map((icon, index) => {
        return (
          <Box key={index} display="flex" alignItems="center">
            {index !== 0 && index !== icons.length && "+"}
            {icon}
          </Box>
        );
      })}
    </Grid>
  );
}
