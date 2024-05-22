import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { userSlice } from './slices/user-slice';
import { animeScheduleSlice } from './slices/anime-schedule-slice';
import { animeRandomSlice } from './slices/anime-random-slice';
import { animeChangesSlice } from './slices/anime-changes-slice';
import { animeTitleSlice } from './slices/anime-title-slice';

const reducers = combineReducers({
  user: userSlice.reducer,
  shedule: animeScheduleSlice.reducer,
  random: animeRandomSlice.reducer,
  changes: animeChangesSlice.reducer,
  title: animeTitleSlice.reducer,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
