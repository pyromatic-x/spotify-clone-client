import {
  ListItem,
  ListItemIcon,
  ListItemText,
  SvgIconTypeMap,
} from "@mui/material";
import { LinkStyled, StyledButton } from "./styled";
import { ComponentType } from "react";
import { DefaultComponentProps } from "@mui/material/OverridableComponent";

type IProps = {
  Icon: ComponentType<DefaultComponentProps<SvgIconTypeMap>>;
  IconActive: ComponentType<DefaultComponentProps<SvgIconTypeMap>>;
  isActive: boolean;
  text: string;
  path: string;
  isCollapsed: boolean;
};

const Item = ({
  Icon,
  IconActive,
  isActive,
  text,
  path,
  isCollapsed,
}: IProps) => (
  <ListItem disablePadding>
    <LinkStyled to={path}>
      <StyledButton className={isActive ? "active" : ""}>
        <ListItemIcon>{isActive ? <IconActive /> : <Icon />}</ListItemIcon>
        {!isCollapsed && <ListItemText primary={text} />}
      </StyledButton>
    </LinkStyled>
  </ListItem>
);

export default Item;
