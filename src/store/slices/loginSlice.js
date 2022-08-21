import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: JSON.parse(localStorage.getItem("userData")) || null,
  },

  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("userData", JSON.stringify(state.user));
    },
    setLogoutUserData: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("userData", JSON.stringify(null));
    },
  },
});
export const { setUserData } = loginSlice.actions;
export const { setLogoutUserData } = loginSlice.actions;

export default loginSlice.reducer;