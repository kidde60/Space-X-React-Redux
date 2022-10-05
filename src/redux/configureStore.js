import { configureStore } from "@reduxjs/toolkit";
import rocketsSlice from './Rockets/rockets';
import missionSlice from './Mission/mission'

export default configureStore({
  reducer: {
    rockets: rocketsSlice,
    missions: missionSlice,
  }
})