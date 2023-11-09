import { createSlice } from "@reduxjs/toolkit";
import { playerPlaylist } from "../mock";
import { shuffle } from "../../utils/shuffle";

const initialState = {
  playlist: playerPlaylist,
  shuffle: false,
  playing: false,
  playingPosition: 0,
  loop: false,
  current: playerPlaylist[0].id,
  volume: 100,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    onChangePosition(state, action) {
      return {
        ...state,
        playingPosition: action.payload,
      };
    },
    onChangeTrack(state, action) {
      const current = state.playlist.findIndex((t) => t.id === state.current);

      if (current === state.playlist.length) {
        return {
          ...state,
          current: state.playlist[0].id,
        };
      }

      if (action.payload === "next") {
        const next = current + 1 === state.playlist.length ? 0 : current + 1;

        return {
          ...state,
          current: state.playlist[next].id,
        };
      }

      if (action.payload === "prev") {
        if (current === 0) {
          return {
            ...state,
            playingPosition: 0,
          };
        }

        return {
          ...state,
          current: state.playlist[current - 1].id,
        };
      }
    },
    changeTrackById(state, action) {
      if (state.current === action.payload) return;
      return {
        ...state,
        playing: true,
        current: action.payload,
      };
    },
    onPlay(state) {
      return {
        ...state,
        playing: true,
      };
    },
    onPause(state) {
      return {
        ...state,
        playing: false,
      };
    },
    onShuffle(state) {
      const currentIndex = state.playlist.findIndex(
        (t) => t.id === state.current
      );

      if (state.shuffle) {
        return {
          ...state,
          shuffle: false,
          playlist: state.playlist.slice().sort((a, b) => a.order - b.order),
        };
      }

      return {
        ...state,
        shuffle: true,
        playlist: shuffle(state.playlist, currentIndex),
      };
    },
    onLoop(state) {
      state.loop = !state.loop;
    },
    onChangeVolume(state, action) {
      return {
        ...state,
        volume: action.payload,
      };
    },
    handleLike(state, action) {
      const index = state.playlist.findIndex((t) => t.id === action.payload);

      const playlist = state.playlist.map((track, i) =>
        i === index ? { ...track, liked: !track.liked } : track
      );

      return {
        ...state,
        playlist,
      };
    },
  },
});

export const {
  onChangePosition,
  onChangeTrack,
  onPlay,
  onPause,
  onShuffle,
  onLoop,
  onChangeVolume,
  handleLike,
  changeTrackById,
} = playerSlice.actions;
export default playerSlice.reducer;
