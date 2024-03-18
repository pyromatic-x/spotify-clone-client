import { Box, CardContent } from "@mui/material";
import PlayButton from "../buttons/PlayButton";
import { memo } from "react";
import { StyledRectangularCard, TextTruncated } from "./styled";
import CardImage from "./cardImage";

type IProps = {
  image: any;
  imageType: "square" | "circle";
  imageStyle: "lines" | "waves";
  color: string;
  title: string;
  subTitle: string;
};

const RectangularCard = memo(function RectangularCard({
  image,
  imageType = "square",
  imageStyle,
  color,
  title,
  subTitle,
}: IProps) {
  return (
    <StyledRectangularCard>
      <Box position="relative">
        <CardImage
          image={image}
          text={title}
          type={imageType}
          style={imageStyle}
          color={color}
        />
        <PlayButton
          sx={{
            position: "absolute",
            bottom: "16px",
            right: "16px",
            transition: "0.3s ease",
            zIndex: "1",
          }}
        />
      </Box>
      <CardContent sx={{ padding: "0", "&:last-child": { padding: "0" } }}>
        <TextTruncated fontWeight="bold" lines={1}>
          {title}
        </TextTruncated>
        {subTitle && (
          <TextTruncated color="secondary" fontSize="small">
            {subTitle}
          </TextTruncated>
        )}
      </CardContent>
    </StyledRectangularCard>
  );
});

export default RectangularCard;
