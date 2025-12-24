import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlices.js";

const store = configureStore({
  reducer: {
    counter : counterReducer,
    
  },
});
export default store;