import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { $api } from '../../api';
import { AxiosError } from 'axios';
import { Root } from '../../types/anime-updates-types';

export const getAnimeChanges = createAsyncThunk(
  'getAnimeChanges',
  async (activePage: number, { rejectWithValue }) => {
    try {
      const { data } = await $api.get('/title/changes', {
        params: {
          playlist_type: 'array',
          page: activePage,
          items_per_page: 8,
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
  changes: Root;
  loading: boolean;
  error: null | string;
}

const initialState: IInitialState = {
  changes: {},
  error: null,
  loading: false,
};

export const animeChangesSlice = createSlice({
  name: 'animeChangesSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAnimeChanges.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAnimeChanges.fulfilled, (state, action) => {
      state.changes = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getAnimeChanges.rejected, (state) => {
      state.loading = false;
      state.error = `Ошибка при получении данных, попробуйте зайти позже : (`;
    });
  },
});
