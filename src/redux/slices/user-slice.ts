import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

interface IInitialState {
  isAuthenticated: boolean;
  email: null | string;
  token: null | string;
  id: null | string;
  loading: boolean;
  error: null | string | unknown;
}

const initialState: IInitialState = {
  isAuthenticated: false,
  email: null,
  token: null,
  id: null,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.isAuthenticated = true;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
      state.isAuthenticated = false;
      Cookies.remove('token');
      Cookies.remove('user');
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
