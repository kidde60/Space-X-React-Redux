import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rocketsSlice from './Rockets/rockets';
import missionReducer from './Mission/mission'

const store = configureStore({
  reducer: {
    rockets: rocketsSlice,
    missions: missionReducer,
  }

}, applyMiddleware(logger))
export default store;
// import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import rocketsSlice from './Rockets/rockets'
// import missionReducer from './Mission/mission'

// const store = configureStore({
//   reducer: {
//     rocketsSlice,
//     missionReducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
// });

// export default store;