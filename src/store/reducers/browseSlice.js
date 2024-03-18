import { createSlice } from "@reduxjs/toolkit";

const defaultData = {
  artists: [],
  playlists: [],
  albums: [],
  tracks: [],
  episodes: [],
  podcasts: [],
  top: null,
  total: 0,
};

const initialState = {
  loading: false,
  search: "",
  ...defaultData,
};

const browseSlice = createSlice({
  name: "browse",
  initialState,
  reducers: {
    resetSearch(state) {
      return {
        ...state,
        ...defaultData,
        search: "",
        loading: false,
      };
    },
    toggleLoading(state, action) {
      return {
        ...state,
        loading: action.payload || !state.loading,
      };
    },
  },
});

export const { resetSearch, toggleLoading } = browseSlice.actions;
export default browseSlice.reducer;
