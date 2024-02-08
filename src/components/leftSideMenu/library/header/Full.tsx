import { Grid, IconButton, Stack, Tooltip } from "@mui/material";
import {
  ChipStyled,
  HeaderContainer,
  LibraryButton,
  LibraryIcon,
} from "./styled";

import {
  Clear as ClearIcon,
  Add as AddIcon,
  ArrowForward as ArrowForwardIcon,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { onSearch } from "../../../../store/reducers/librarySlice";
import { toggleLeftMenu } from "../../../../store/reducers/applicationSlice";
import { capitalizeFirstLetter } from "../../../../utils/strings";
import ButtonWithTooltip from "./ButtonWithTooltip";

export default function HeaderFull({ headerShadow }: any) {
  const dispatch = useDispatch();

  const { _categories } = useSelector((state: any) => state.library);

  const [category, setCategory] = useState(null);

  function onChooseFilter(value: any) {
    if (category) setCategory(null);
    else setCategory(value);
    dispatch(onSearch({ categoryValue: value }));
  }

  function onToggleLeftMenu(collapse: boolean) {
    dispatch(toggleLeftMenu(null));
    if (collapse) {
      dispatch(onSearch({ searchValue: null }));
    }
  }

  return (
    <HeaderContainer className={headerShadow ? "shadow" : ""}>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        wrap="nowrap"
      >
        <Tooltip title="Collapse Your Library">
          <LibraryButton
            disableRipple
            startIcon={<LibraryIcon />}
            onClick={() => onToggleLeftMenu(true)}
          >
            Your Library
          </LibraryButton>
        </Tooltip>
        <Grid container columnGap={1} width="max-content">
          <ButtonWithTooltip title="Create playlist or folder" Icon={AddIcon} />
          <ButtonWithTooltip title="Show more" Icon={ArrowForwardIcon} />
        </Grid>
      </Grid>
      <Stack direction="row" spacing={1} alignItems="center" paddingLeft="3px">
        {category && (
          <IconButton
            sx={{
              backgroundColor: "secondary.light",
              height: "32px",
              width: "32px",
              "& svg": {
                fill: "secondary.main",
              },
            }}
            onClick={() => onChooseFilter(null)}
          >
            <ClearIcon />
          </IconButton>
        )}
        {category ? (
          <ChipStyled
            label={capitalizeFirstLetter(category)}
            onClick={() => onChooseFilter(null)}
            className="active"
          />
        ) : (
          _categories.map((f: any) => (
            <ChipStyled
              key={f}
              label={capitalizeFirstLetter(f)}
              onClick={() => onChooseFilter(f)}
            />
          ))
        )}
      </Stack>
    </HeaderContainer>
  );
}
