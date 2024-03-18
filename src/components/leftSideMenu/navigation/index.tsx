import { Grid, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { memo } from "react";
import MainContainer from "../../MainContainer";
import { Item } from "./styled";
import { items } from "./constants";

const Navigation = memo(function Navigation() {
  const { pathname } = useLocation();

  return (
    <MainContainer
      sx={{
        display: "flex",
        justifyContent: "start",
      }}
    >
      <Grid container flexDirection="column" gap="10px" paddingLeft="7px">
        {items.map((i) => {
          const active = pathname === i.path;
          const Icon = active ? i.IconActive : i.Icon;

          return (
            <Item to={i.path} active={active}>
              <Icon />
              <Typography fontWeight="bold" ml="10px">
                {i.title}
              </Typography>
            </Item>
          );
        })}
      </Grid>
    </MainContainer>
  );
});

export default Navigation;
