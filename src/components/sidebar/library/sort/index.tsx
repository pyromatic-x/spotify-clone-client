import { FormatListBulleted } from "@mui/icons-material";
import { StyledSortButton } from "./styled";
import Popover from "../../../common/popover";
import { useUnit } from "effector-react";
import { $sort, changeSort } from "../../effect";
import { StyledPopoverItem } from "../../../common/popover/styled";
import { Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { Sortings } from "../../types";

const Filters = () => {
  const sort = useUnit($sort);

  return (
    <Popover
      vertical="bottom"
      horizontal="right"
      toggler={
        <StyledSortButton disableRipple endIcon={<FormatListBulleted />} color="secondary">
          {sort}
        </StyledSortButton>
      }
      content={
        <>
          <StyledPopoverItem disabled>
            <Typography>Sort by</Typography>
          </StyledPopoverItem>
          {Object.values(Sortings)
            .filter((t) => typeof t === "string")
            .map((t: any) => (
              <StyledPopoverItem onClick={() => changeSort(t)} key={t}>
                <Typography color={sort === t ? "green.main" : "white"}>{t}</Typography>
                {sort === t && <CheckIcon color="green" />}
              </StyledPopoverItem>
            ))}
        </>
      }
      sx={{ top: "10px", left: "-175px !important" }}
    />
  );
};

export default Filters;
