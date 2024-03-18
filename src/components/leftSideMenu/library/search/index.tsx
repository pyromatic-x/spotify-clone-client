import {
  Cancel,
  FormatListBulleted,
  Search as SearchIcon,
} from "@mui/icons-material";
import { ClickAwayListener, Grid, InputAdornment } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SearchContainer,
  StyledSearchButton,
  StyledSearchInput,
  StyledSortButton,
} from "./styled";
import { capitalizeFirstLetter } from "../../../../utils/strings";
import { onSearch } from "../../../../store/reducers/librarySlice";

function Search() {
  const dispatch = useDispatch();
  const { category } = useSelector((state: any) => state.library.filters);
  const { leftMenuCollapsed } = useSelector((state: any) => state.application);

  const [searchOpened, setSeachOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const searchRef = useRef(null);

  useEffect(() => {
    if (leftMenuCollapsed) {
      setSeachOpened(false);
      setSearchValue("");
    }

    dispatch(onSearch({ searchValue: searchValue || null }));
  }, [searchValue, leftMenuCollapsed, searchRef, dispatch, searchOpened]);

  function handleClickOutside(event: any) {
    if (
      searchRef.current &&
      //@ts-ignore
      !searchRef.current.contains(event.target) &&
      !searchValue &&
      searchOpened
    ) {
      setSeachOpened(false);
      setSearchValue("");
    }
  }

  return leftMenuCollapsed ? null : (
    <ClickAwayListener onClickAway={handleClickOutside}>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        marginBottom={1.5}
        paddingLeft={1.5}
        paddingRight={1.5}
        position="relative"
      >
        <StyledSearchButton
          className={searchOpened ? "hidden" : ""}
          onClick={() => setSeachOpened(true)}
        >
          <SearchIcon />
        </StyledSearchButton>
        <SearchContainer className={searchOpened ? "" : "hidden"}>
          <StyledSearchInput
            ref={searchRef}
            size="small"
            variant="outlined"
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            inputProps={{ maxLength: 30 }}
            placeholder={`Search in ${
              category ? capitalizeFirstLetter(category) : "Library"
            }`}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: searchValue && (
                <InputAdornment
                  position="end"
                  onClick={() => setSearchValue("")}
                >
                  <Cancel />
                </InputAdornment>
              ),
            }}
          />
        </SearchContainer>
        <StyledSortButton
          disableRipple
          endIcon={<FormatListBulleted />}
          color="secondary"
        >
          Recents
        </StyledSortButton>
      </Grid>
    </ClickAwayListener>
  );
}

export default Search;
