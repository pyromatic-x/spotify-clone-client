import {
  HomeOutlined,
  Home,
  SearchOutlined,
  YoutubeSearchedFor,
} from "@mui/icons-material";
import { List } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { memo } from "react";
import MainContainer from "../../MainContainer";
import Item from "./listItem";

const Navigation = memo(function Navigation() {
  const leftMenuCollapsed = useSelector(
    (state: any) => state.application.leftMenuCollapsed
  );
  const { pathname } = useLocation();

  return (
    <MainContainer
      sx={{
        display: "flex",
        justifyContent: "start",
      }}
    >
      <List
        disablePadding
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginLeft: "7px",
        }}
      >
        <Item
          Icon={HomeOutlined}
          IconActive={Home}
          isActive={pathname === "/"}
          text="Home"
          path="/"
          isCollapsed={leftMenuCollapsed}
        />
        <Item
          Icon={SearchOutlined}
          IconActive={YoutubeSearchedFor}
          isActive={pathname === "/search"}
          text="Search"
          path="/search"
          isCollapsed={leftMenuCollapsed}
        />
      </List>
    </MainContainer>
  );
});

export default Navigation;
