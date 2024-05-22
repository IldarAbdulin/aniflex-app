import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { ISheduleArray } from '../../types/anime-schedule-types';
import { $api } from '../../api';

export const getScheduleArr = createAsyncThunk<[], ISheduleArray>(
  'getShedule',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await $api.get('/title/schedule');
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
  schedules: ISheduleArray;
  loading: boolean;
  error: null | string;
}

const initialState: IInitialState = {
  schedules: [],
  error: null,
  loading: false,
};

export const animeScheduleSlice = createSlice({
  name: 'animeScheduleSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getScheduleArr.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getScheduleArr.fulfilled, (state, action) => {
      state.schedules = action.payload;
      state.error = null;
      state.loading = false;
    });
    builder.addCase(getScheduleArr.rejected, (state) => {
      state.loading = false;
      state.error = `Ошибка при получении данных, попробуйте зайти позже : (`;
    });
  },
});
