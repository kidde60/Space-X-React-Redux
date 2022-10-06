import { configureStore } from "@reduxjs/toolkit";
import rocketsSlice from './Rockets/rockets'

export default configureStore({
  reducer: {
    rockets: rocketsSlice,
  }
})