import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://mmo-games.p.rapidapi.com/games',
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': 'abe9a32cbamshf76d40bc68de55ap12ba83jsn2cd6c7a4913d',
    'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
  },
};

const initialState = {
  games: [],
  isLoading: false,
  hasError: false,
  searched: '',
};

export const fetchGames = createAsyncThunk('games/fetchGames', async (thunkAPI) => {
  try {
    const response = await axios.request(options);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Something went wrong');
  }
});

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    addSearched: (state, action) => ({ ...state, searched: action.payload }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGames.pending, (state) => ({ ...state, isLoading: true }));
    builder.addCase(fetchGames.fulfilled, (state, action) => {
      const moviesFetched = action.payload;
      return { ...state, isLoading: false, games: moviesFetched };
    });
    builder.addCase(fetchGames.rejected,
      (state) => ({ ...state, isLoading: false, hasError: true }));
  },
});

export default gamesSlice.reducer;

export const { addSearched } = gamesSlice.actions;
