import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const r = await axios.post('/users/signup', credentials);
      token.set(r.data.token);
      return r.data;
    } catch ({ response: { status } }) {
      return thunkAPI.rejectWithValue(
        status === 400
          ? toast.error('This email already registered.')
          : 'server connection error'
      );
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const r = await axios.post('/users/login', credentials);
      token.set(r.data.token);
      return r.data;
    } catch ({ response: { status } }) {
      return thunkAPI.rejectWithValue(
        status === 400
          ? toast.error('Password or email is incorrect.')
          : 'server connection error'
      );
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch ({ response: { status } }) {
    return thunkAPI.rejectWithValue(
      status === 500 ? toast.error('Logout error') : 'Server error.'
    );
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    token.set(persistedToken);
    try {
      const r = await axios.get('/users/current');

      return r.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
