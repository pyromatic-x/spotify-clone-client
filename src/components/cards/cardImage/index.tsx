import { Box, CardMedia } from "@mui/material";
import { checkIsColorTooBright } from "../../../utils/strings";
import VisualEffect from "./VisualEffect";
import Placeholder from "./Placeholder";
import { useState } from "react";

type IProps = {
  image: any;
  text: string;
  type: "square" | "circle";
  style: "waves" | "lines";
  color: string;
};

function CardImage({ image, text, type, style, color }: IProps) {
  const [imgLoaded, setImgLoaded] = useState(false);

  const isColorBright = checkIsColorTooBright(color);

  return (
    <Box
      sx={{
        height: 0,
        overflow: "hidden",
        paddingTop: "100%",
        marginBottom: 2,
      }}
    >
      <Placeholder color={color} loaded={imgLoaded} type={type} />
      <Box
        sx={{
          overflow: "hidden",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
          left: "0",
          borderRadius: type === "square" ? "4px" : "50%",
        }}
      >
        <CardMedia
          component="img"
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          height={200}
          image={image}
          alt={text}
          sx={{
            borderRadius: type === "square" ? "4px" : "50%",
            opacity: "0.85",
            aspectRatio: "1",
            transition: "0.25s ease",
            boxShadow: "0px 0px 8px 8px rgba(16, 15, 15, 0.4)",
            height: "100%",
            width: "100%",
          }}
        />
        <VisualEffect
          color={color}
          text={text}
          isColorBright={isColorBright}
          style={style}
        />
      </Box>
    </Box>
  );
}

export default CardImage;
