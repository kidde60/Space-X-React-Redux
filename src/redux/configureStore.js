import { configureStore } from '@reduxjs/toolkit';
import rocketsSlice from './Rockets/rockets';
import missionsReducer from './Mission/mission';

export default configureStore({
  reducer: {
    rockets: rocketsSlice,
    missions: missionsReducer,
  },
});
