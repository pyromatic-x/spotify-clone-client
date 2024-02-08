import { Grid, IconButton, SvgIconTypeMap, Tooltip } from "@mui/material";
import { Notifications, Groups, Person } from "@mui/icons-material";
import { ComponentType } from "react";
import { DefaultComponentProps } from "@mui/material/OverridableComponent";

const Btn = ({
  Icon,
  title,
}: {
  Icon: ComponentType<DefaultComponentProps<SvgIconTypeMap>>;
  title: string;
}) => {
  return (
    <Tooltip title={title} placement="bottom">
      <IconButton
        sx={{
          backgroundColor: "rgba(4, 4, 4, 1)",
          transition: "0.2s",
          "&:hover": {
            transform: "scale(1.15)",
            "& svg": {
              fill: "white",
            },
          },
        }}
        disableRipple
      >
        <Icon sx={{ fontSize: "1.2rem" }} color="secondary" />
      </IconButton>
    </Tooltip>
  );
};

export default function Menu() {
  return (
    <Grid container position="relative" width="max-content" columnGap={1}>
      <Btn Icon={Notifications} title="What's New" />
      <Btn Icon={Groups} title="Friend Activity" />
      <Btn Icon={Person} title="Profile" />
    </Grid>
  );
}
