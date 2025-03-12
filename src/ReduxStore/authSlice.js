import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    logout: (state) => {
      state.email = ""; // Reset email on logout
    },
  },
});

export const { setEmail, logout } = authSlice.actions;
export default authSlice.reducer; // Corrected export
