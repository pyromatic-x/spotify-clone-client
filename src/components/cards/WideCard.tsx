import { CardContent, CardMedia, Typography, useTheme } from "@mui/material";
import { useDispatch } from "react-redux";
import { changeHomePageBackground } from "../../store/reducers/applicationSlice";
import { Favorite } from "@mui/icons-material";

import { ReactComponent as BackgroundIcon } from "../../assets/svg/widecard-bg-path.svg";
import { checkIsColorTooBright } from "../../utils/strings";
import Logo from "../../assets/icons/Logo";
import PlayButton from "../buttons/PlayButton";
import { memo } from "react";
import {
  LikedSongsImage,
  StyledWideCard,
  WideCardMediaBackground,
  WideCardMediaContainer,
} from "./styled";

type IProps = {
  title: string;
  image?: any;
  color?: string;
};

const WideCard = memo(function WideCard({ title, image, color }: IProps) {
  const dispatch = useDispatch();
  const theme = useTheme();

  color = color || theme.palette.background.purple;

  const isColorBright = checkIsColorTooBright(color);

  return (
    <StyledWideCard
      onMouseEnter={() => dispatch(changeHomePageBackground(color))}
      onMouseLeave={() => dispatch(changeHomePageBackground(""))}
    >
      {title === "Liked Songs" ? (
        <LikedSongsImage>
          <Favorite fontSize="large" />
        </LikedSongsImage>
      ) : (
        <WideCardMediaContainer sx={{ backgroundColor: color }}>
          <CardMedia component="img" src={image} alt={title} height={100} />
          <WideCardMediaBackground accent={color} viewBox="0 0 80 80">
            <BackgroundIcon />
          </WideCardMediaBackground>
          <Logo
            size="8px"
            sx={{
              display: "block",
              position: "absolute",
              top: "3px",
              left: "2px",
              "& path": { fill: isColorBright ? "black" : "" },
            }}
          />
          <Typography
            sx={{
              position: "absolute",
              bottom: "4px",
              left: "4px",
              fontSize: "7px",
              fontWeight: "bold",
              color: isColorBright ? "black" : "",
            }}
          >
            {title}
          </Typography>
        </WideCardMediaContainer>
      )}
      <CardContent>
        <Typography fontWeight="bold" fontSize="0.9rem">
          {title}
        </Typography>
        <PlayButton />
      </CardContent>
    </StyledWideCard>
  );
});

export default WideCard;
