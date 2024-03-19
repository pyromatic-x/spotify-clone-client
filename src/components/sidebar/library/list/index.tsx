import { useUnit } from "effector-react";
import { ListWrapper, StyledList } from "./styled";
import NoResults from "../NoResults";
import { $collapsed, $expanded, $items, setShadow } from "../../effect";
import LibraryListItem from "./Item";
import { Grid } from "@mui/material";
import Search from "../search";
import Filters from "../sort";

const LibraryList = () => {
  const items = useUnit($items);
  const collapsed = useUnit($collapsed);
  const expanded = useUnit($expanded);

  const handleScroll = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
    setShadow(event.currentTarget.scrollTop > 1);
  };

  return (
    <ListWrapper onScroll={handleScroll} padding={`${expanded ? "12px" : "0"} 6px 6px 6px`}>
      {!expanded && !collapsed && (
        <Grid
          padding="0 10px"
          container
          justifyContent="space-between"
          alignItems="center"
          flexWrap="nowrap"
          mb="10px"
          gap={1}
        >
          <Search />
          <Filters />
        </Grid>
      )}
      {!!items.length ? (
        <StyledList>
          {items.map((t) => (
            <LibraryListItem {...t} key={t.title + Math.random()} />
          ))}
        </StyledList>
      ) : (
        <NoResults />
      )}
    </ListWrapper>
  );
};

export default LibraryList;
