import { configureStore } from "@reduxjs/toolkit";
import playerSlice from "./reducers/playerSlice";
import applicationSlice from "./reducers/applicationSlice";
import librarySlice from "./reducers/librarySlice";
import browseSlice from "./reducers/browseSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    player: playerSlice,
    application: applicationSlice,
    library: librarySlice,
    browse: browseSlice,
  },
});

setupListeners(store.dispatch);
