import { useMediaQuery, useTheme } from "@mui/material";
import AudioBar from "../audiobar/AudioBar";
import { Outlet, useLocation } from "react-router-dom";
import MainContainer from "../MainContainer";
import Header from "../header/Header";
import { PropsWithChildren, useState } from "react";
import NoMobileModal from "../../NoMobileMiddleware";
import { RootContainer, StyledOutletContainer } from "./styles";
import LeftSideMenu from "../leftSideMenu";

export default function Root({ children }: PropsWithChildren) {
  const location = useLocation();

  const [homePageScrolled, setHomePageScrolled] = useState(false);

  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  const handleScroll = (event: React.UIEvent<HTMLElement>): void => {
    event.preventDefault();

    if (location.pathname !== "/") {
      setHomePageScrolled(false);
      return;
    }
    const top = event.currentTarget.scrollTop;
    if (top < 90) {
      setHomePageScrolled(false);
    }
    if (top > 90) {
      setHomePageScrolled(true);
    }
  };

  return (
    <RootContainer>
      <LeftSideMenu />
      <MainContainer sx={{ padding: "18px", gridRow: "span 2" }}>
        <Header addBackground={homePageScrolled} />
        <StyledOutletContainer onScroll={handleScroll}>
          {children ?? <Outlet />}
        </StyledOutletContainer>
      </MainContainer>
      {sm ? <NoMobileModal /> : <AudioBar />}
    </RootContainer>
  );
}
