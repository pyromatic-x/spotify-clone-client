import { Grid, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { capitalizeFirstLetter } from "../../../../utils/strings";
import { ItemType } from "../../types";
import { useUnit } from "effector-react";
import { $category, $collapsed, $expanded, $search } from "../../effect";
import { CollapsedItem, Item, StyledAvatar } from "./styled";

const LibraryListItem = ({ author, title, subTitle, image, type }: ItemType) => {
  const collapsed = useUnit($collapsed);
  const category = useUnit($category);
  const search = useUnit($search);
  const expanded = useUnit($expanded);

  const secondaryText = !!category || !!search ? author : capitalizeFirstLetter(type.slice(0, -1));

  if (collapsed)
    return (
      <CollapsedItem>
        <StyledAvatar
          alt={author}
          src={image}
          sx={{ width: 48, height: 48 }}
          type={type === "artists" ? "circle" : "square"}
        />
      </CollapsedItem>
    );

  return (
    <Item expanded={expanded}>
      <Grid container width="auto">
        <ListItemAvatar sx={{ minWidth: "auto" }}>
          <StyledAvatar
            alt={author || subTitle}
            src={image}
            sx={{ width: 48, height: 48 }}
            type={type === "artists" ? "circle" : "square"}
          />
        </ListItemAvatar>
        <ListItemText primary={title} secondary={secondaryText} sx={{ marginLeft: "12px" }} />
      </Grid>
      {expanded && (
        <>
          <Typography textAlign="center" fontSize="14px" color="secondary">
            date
          </Typography>
          <Typography textAlign="end" fontSize="14px" color="secondary">
            played
          </Typography>
        </>
      )}
    </Item>
  );
};

export default LibraryListItem;
