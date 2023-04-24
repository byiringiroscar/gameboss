import { configureStore } from '@reduxjs/toolkit';
import gamesReducer from './games/gamesSlice';

export const store = configureStore({
  reducer: {
    games: gamesReducer,
  },
});

export default store;
