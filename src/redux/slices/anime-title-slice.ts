import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { List } from '../../types/anime-schedule-types';
import { AxiosError } from 'axios';
import { $api } from '../../api';

export const getAnimeTitle = createAsyncThunk(
  'getAnimeTitle',
  async (code: string | undefined, { rejectWithValue }) => {
    try {
      const { data } = await $api.get(`/title?code=${code}`, {
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
  title: List;
  error: null | string;
  loading: boolean;
}

const initialState: IInitialState = {
  title: {},
  error: null,
  loading: false,
};

export const animeTitleSlice = createSlice({
  name: 'animeTitleSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAnimeTitle.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAnimeTitle.fulfilled, (state, action) => {
      state.title = action.payload;
      state.error = null;
      state.loading = false;
    });
    builder.addCase(getAnimeTitle.rejected, (state) => {
      state.error = `Ошибка при получении данных, попробуйте зайти позже : (`;
      state.loading = false;
    });
  },
});
