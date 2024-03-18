import { Avatar, Box, Grid, IconButton, Link, Typography } from "@mui/material";
import { memo, useState } from "react";
import LikeButton from "../buttons/LikeButton";
import { formatDuration } from "../../utils/strings";
import { MoreHoriz, PlayArrow } from "@mui/icons-material";
import { StyledTrackCard } from "./styled";

const Track = memo(function Track({ track }: any) {
  const [hovering, setHovering] = useState(false);

  return (
    <StyledTrackCard
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <Grid
        container
        direction="row"
        flexWrap="nowrap"
        alignItems="center"
        position="relative"
      >
        <Avatar
          variant="rounded"
          src={track.image}
          alt={track.name}
          sx={{ marginRight: 2, opacity: hovering ? "0.4" : "1" }}
        />
        {hovering && (
          <IconButton sx={{ position: "absolute", left: "0" }} disableRipple>
            <PlayArrow />
          </IconButton>
        )}
        <Grid container direction="column">
          <Typography className="queue-item-name" fontWeight="bold">
            {track.name}
          </Typography>
          <Typography lineHeight={1}>
            {track.authors.map((author: any, index: any) => (
              <Box component="span" key={index + "-" + author}>
                <Link underline="hover" color="secondary">
                  {author}
                </Link>
                {index + 1 !== track.authors.length ? ", " : ""}
              </Box>
            ))}
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ opacity: track.liked || hovering ? 1 : 0 }}>
        <LikeButton id={track.id} />
      </Box>
      <Typography color="secondary" textAlign="center">
        {formatDuration(track.duration)}
      </Typography>
      <IconButton
        sx={{ padding: 0, width: "40px", height: "40px", opacity: "0" }}
        className="queue-item-menu-button"
      >
        <MoreHoriz />
      </IconButton>
    </StyledTrackCard>
  );
});
export default Track;
