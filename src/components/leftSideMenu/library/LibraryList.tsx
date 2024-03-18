import { Box, Grid, List, Typography, styled } from "@mui/material";
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import Search from "./search";
import { useUnit } from "effector-react";
import { $items } from "../effect";

const StyledList = styled(List)({
  width: "100%",
  padding: 0,
});

function NoResults({ searchValue }: { searchValue: string }) {
  return (
    <Grid justifyContent="center" direction="column" container marginTop="150px">
      <Typography
        variant="h6"
        component="h6"
        fontWeight="bold"
        textAlign="center"
        noWrap
        sx={{
          display: "inline-flex",
          justifyContent: "center",
        }}
      >
        <Typography component="span">Couldn't find "</Typography>
        <Typography
          component="span"
          sx={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            maxWidth: "140px",
            display: "inline-block",
          }}
        >
          {searchValue}
        </Typography>
        <Typography component="span">"</Typography>
      </Typography>
      <Typography textAlign="center" variant="subtitle2">
        Try searching again using a different spelling or keyword.
      </Typography>
    </Grid>
  );
}

function LibraryList({ hasShadow, setHasShadow }: { hasShadow: boolean; setHasShadow: any }) {
  const selectLoading = (state: any) => state.library.loading;
  const selectFilters = (state: any) => state.library.filters;
  const selectFilteredItems = (state: any) => state.library.filtered;
  const selectIsMenuCollapsed = (state: any) => state.application.leftMenuCollapsed;

  const selector = createSelector(
    [selectLoading, selectFilters, selectFilteredItems, selectIsMenuCollapsed],
    (loading, filters, items, leftMenuCollapsed) => {
      return {
        loading,
        searchValue: filters.search,
        category: filters.category,
        items,
        leftMenuCollapsed,
      };
    }
  );

  const { searchValue, category, leftMenuCollapsed } = useSelector(selector);

  const items = useUnit($items);

  const handleScroll = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const top = event.currentTarget.scrollTop;

    if (hasShadow && top < 1) {
      setHasShadow(false);
    }
    if (!hasShadow && top > 1) {
      setHasShadow(true);
    }
  };

  return (
    <Box
      sx={{
        overflowY: "scroll",
        width: "calc(100% + 18px)",
        margin: "0 -9px",
        padding: "0 6px 6px 6px",
      }}
      onScroll={(e) => handleScroll(e)}
    >
      <Search />
      {items.length ? (
        <StyledList>
          {/* {items.map((t) => (
            <LibraryListItem
              {...t}
              key={t.name || t.title}
              leftMenuCollapsed={leftMenuCollapsed}
              showDescription={!!category || !!searchValue}
            />
          ))} */}
        </StyledList>
      ) : (
        <NoResults searchValue={searchValue} />
      )}
    </Box>
  );
}

export default LibraryList;
