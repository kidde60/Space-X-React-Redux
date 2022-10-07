/* eslint-disable */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchRockets = createAsyncThunk(
  'rockets/fetch/rockets',
  async () => {
    const rockets = await fetch('https://api.spacexdata.com/v3/rockets');
    const data = await rockets.json();
    return data;
  },
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    rocketsReserve(state, action) {
      const id = action.payload;
      const ExistingRockets = state.rockets.find((rocket) => rocket.id === id);
      if (ExistingRockets) {
        ExistingRockets.reserved = true;
      }
    },
    rocketsCancel(state, action) {
      const id = action.payload;
      const ExistingRockets = state.rockets.find((rocket) => rocket.id === id);
      if (ExistingRockets) {
        ExistingRockets.reserved = false;
      }
    },
  },
  extraReducers: {
    [fetchRockets.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchRockets.fulfilled]: (state, action) => {
      state.status = 'scceeded';
      state.rockets = [...action.payload];
    },
    [fetchRockets.error]: (state, action) => {
      state.status = 'Error';
      state.error = action.error.message;
    },
  },
});

export default rocketsSlice.reducer;
export const { rocketsReserve, rocketsCancel } = rocketsSlice.actions;
