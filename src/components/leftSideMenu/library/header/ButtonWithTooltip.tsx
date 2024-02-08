import { IconButton, SvgIconTypeMap, Tooltip } from "@mui/material";
import { DefaultComponentProps } from "@mui/material/OverridableComponent";
import { ComponentType } from "react";

type IProps = {
  title: string;
  Icon: ComponentType<DefaultComponentProps<SvgIconTypeMap>>;
};

const ButtonWithTooltip = ({ title, Icon }: IProps) => (
  <Tooltip title={title}>
    <IconButton
      sx={{
        width: "32px",
        height: "32px",
        color: "secondary.main",
        transition: "0.2s ease",
        "&:hover": {
          color: "white",
        },
        "& svg": {
          fontSize: "1.3rem",
        },
      }}
    >
      <Icon />
    </IconButton>
  </Tooltip>
);

export default ButtonWithTooltip;
