import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://www.freetogame.com/api/games';

const initialState = {
  games: [],
  isLoading: false,
  hasError: false,
};

export const fetchGames = createAsyncThunk('games/fetchGames', async (thunkAPI) => {
  try {
    const response = await axios(apiUrl);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Something went wrong');
  }
});

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGames.pending, (state) => ({ ...state, isLoading: true }));
    builder.addCase(fetchGames.fulfilled, (state, action) => {
      const moviesFetched = action.payload;
      console.log(moviesFetched);
      return { ...state, isLoading: false, games: moviesFetched };
    });
    builder.addCase(fetchGames.rejected,
      (state) => ({ ...state, isLoading: false, hasError: true }));
  },
});

export default gamesSlice.reducer;
