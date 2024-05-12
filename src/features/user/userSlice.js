import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const themes = {
  autumn: "autumn",
  sunset: "sunset",
};

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme") || themes.sunset;
  document.documentElement.setAttribute("data-theme", theme);
};

const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("user")) || null;
};

const initialState = {
  user: getUserFromLocalStorage(),
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const user = { ...action.payload.user, token: action.payload.jwt };
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
      toast.success("You successfully logged out");
    },
    toggleTheme: (state) => {
      const { autumn, sunset } = themes;
      state.theme = state.theme === autumn ? sunset : autumn;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
