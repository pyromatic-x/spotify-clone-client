import { Grid } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material/";
import { useLocation, useNavigate } from "react-router-dom";
import Search from "./Search";
import QueueCategories from "./QueueCategories";
import { NavigationButton } from "./styles";

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Grid
      container
      columnGap={0.5}
      flexWrap="nowrap"
      width="max-content"
      alignItems="center"
    >
      <NavigationButton
        onClick={() => navigate(-1)}
        disabled={location.key === "default"}
      >
        <ArrowBackIosNew />
      </NavigationButton>
      <NavigationButton onClick={() => navigate(1)}>
        <ArrowForwardIos />
      </NavigationButton>
      {location.pathname === "/search" && <Search />}
      {location.pathname === "/queue" && <QueueCategories />}
    </Grid>
  );
}

export default Navigation;
