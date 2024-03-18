import { Grid, Link, Typography, useMediaQuery, useTheme } from "@mui/material";
import RectangularCard from "./RectangularCard";
import { useEffect, useState } from "react";

const itemsCountByWidth = {
  xs: 2,
  sm: 2,
  md: 3,
  lg: 5,
  xl: 5,
  xxl: 8,
};

type IProps = {
  title: string;
  items: Array<any>;
  imageType?: "square" | "circle";
  imageStyle?: "circle" | "waves";
  showAll?: boolean;
};

function CardsSection({
  title,
  items = [],
  imageType = "square",
  imageStyle = "circle",
  showAll = true,
}: IProps) {
  const [count, setCount] = useState(2);

  const theme = useTheme();
  const keys = [...theme.breakpoints.keys].reverse();

  const breakpoint =
    keys.filter((key: any) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));

      if (matches) return true;
      return false;
    }, null)[0] ?? "xs";

  useEffect(() => {
    setCount(itemsCountByWidth[breakpoint]);
  }, [setCount, breakpoint]);

  return (
    <Grid container>
      <Grid container alignItems="center" justifyContent="space-between" mb={2}>
        {showAll ? (
          <Link underline="hover" fontWeight="bold" variant="h6" color="white">
            {title}
          </Link>
        ) : (
          <Typography fontWeight="bold" variant="h6" color="white">
            {title}
          </Typography>
        )}
        {showAll && (
          <Link color="secondary" fontSize="small" fontWeight="bold" underline="hover">
            Show all
          </Link>
        )}
      </Grid>
      <Grid container spacing={3}>
        {items.slice(0, count).map((item) => (
          <Grid
            item
            lg={count === 8 ? 1.5 : 2.4}
            md={4}
            xs={6}
            key={"home-section-item_" + (item.id || item.title)}
          >
            <RectangularCard {...item} imageType={imageType} imageStyle={imageStyle} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default CardsSection;
