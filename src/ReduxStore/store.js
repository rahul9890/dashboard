import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"; // Corrected import

const store = configureStore({
  reducer: {
    auth: authReducer, // Corrected usage
  },
});

export default store;
