import { Avatar, Box, Grid, Link, Typography } from "@mui/material";

type IProps = {
  cover: string;
  name: string;
  authors: Array<string>;
  active: boolean;
};

const Track = ({ cover, name, authors, active }: IProps) => (
  <Grid container direction="row" flexWrap="nowrap" alignItems="center">
    <Avatar variant="rounded" src={cover} sx={{ marginRight: 2 }} />
    <Grid container direction="column">
      <Typography
        className={(active ? "active" : "").concat(" queue-item-name")}
        fontWeight="bold"
      >
        {name}
      </Typography>
      <Typography lineHeight={1}>
        {authors.map((author, index) => (
          <Box component="span" key={index + "-" + author}>
            <Link underline="hover" color="secondary">
              {author}
            </Link>
            {index + 1 !== authors.length ? ", " : ""}
          </Box>
        ))}
      </Typography>
    </Grid>
  </Grid>
);

export default Track;
