import { memo, useCallback, useState } from "react";
import MainContainer from "../../MainContainer";
import LibraryList from "./LibraryList";
import Header from "./header";

const Library = memo(function Library() {
  const [hasShadow, setHasShadow] = useState(false);

  const onSetHeaderShadow = useCallback(() => {
    setHasShadow(!hasShadow);
  }, [hasShadow]);

  return (
    <MainContainer
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "start",
        overflowY: "scroll",
        padding: "0 10px 14px 10px",
      }}
    >
      <Header hasShadow={hasShadow} />
      <LibraryList setHasShadow={onSetHeaderShadow} hasShadow={hasShadow} />
    </MainContainer>
  );
});

export default Library;
