import {
  KeyboardArrowDown,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  KeyboardArrowUp,
  KeyboardOptionKey,
  SpaceBar,
} from "@mui/icons-material";
import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import Icons from "./Icons";

const shortcuts = [
  {
    text: "Play/Pause: ",
    icons: [<SpaceBar />],
  },
  {
    text: "Next track: ",
    icons: [<KeyboardOptionKey />, <KeyboardArrowRight />],
  },
  {
    text: "Prev track: ",
    icons: [<KeyboardOptionKey />, <KeyboardArrowLeft />],
  },
  {
    text: "Volume up: ",
    icons: [<KeyboardOptionKey />, <KeyboardArrowUp />],
  },
  {
    text: "Volume down: ",
    icons: [<KeyboardOptionKey />, <KeyboardArrowDown />],
  },
];

export default function Shortcuts() {
  return (
    <Grid item lg={6}>
      <Typography fontWeight="bold">Shortcuts:</Typography>
      <List sx={{ "& svg": { color: "white" } }}>
        {shortcuts.map((sc) => (
          <ListItem
            key={sc.text}
            sx={{
              padding: "0",
              "&:not(:first-of-type)": { margin: "9px 0" },
            }}
          >
            <ListItemText sx={{ padding: 0, margin: 0, flexGrow: 0 }}>
              {sc.text}
            </ListItemText>
            <Icons icons={sc.icons} />
          </ListItem>
        ))}
      </List>
    </Grid>
  );
}
