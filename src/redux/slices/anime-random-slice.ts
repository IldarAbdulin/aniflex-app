import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Random } from '../../types/anime-random-types';
import { $api } from '../../api';
import { AxiosError } from 'axios';

export const getRandomAnime = createAsyncThunk(
  'getRandomAnime',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await $api.get('/title/random', {
        params: {
          playlist_type: 'array',
        },
      });
      return data;
    } catch (err) {
      let error: AxiosError<PaymentValidationErrors> | any = err;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

interface IInitialState {
  random: Random;
  error: null | string;
  loading: boolean;
}

const initialState: IInitialState = {
  random: {},
  error: null,
  loading: false,
};

export const animeRandomSlice = createSlice({
  name: 'animeRandomSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRandomAnime.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getRandomAnime.fulfilled, (state, action) => {
      state.random = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getRandomAnime.rejected, (state) => {
      state.loading = false;
      state.error = `Ошибка при получении данных, попробуйте зайти позже : (`;
    });
  },
});
