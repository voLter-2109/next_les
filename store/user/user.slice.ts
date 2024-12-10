import { createSlice } from "@reduxjs/toolkit";
import { fetchUserById, logout } from "./user.actions";
import { InitialUserStore } from "./user.interface";

const getStoreLOcal = (name: string) => {
  if (typeof localStorage !== "undefined") {
    const Is = localStorage.getItem(name);
    return Is ? JSON.parse(Is) : null;
  }
  return null;
};

const initialState: InitialUserStore = {
  user: getStoreLOcal("user"),
  isLoading: false,
  errorMessage: "",
};
//
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetErrorMessage: (state) => {
      state.errorMessage = initialState.errorMessage;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.pending, (state) => {
      console.log("pending");
      state.isLoading = true;
      state.errorMessage = initialState.errorMessage;
    }),
      builder.addCase(fetchUserById.fulfilled, (state, action) => {
        console.log("fulfilled");
        state.isLoading = false;
        state.user = action.payload;
      }),
      builder.addCase(fetchUserById.rejected, (state, action) => {
        console.log("rejected");
        state.isLoading = false;
        state.errorMessage = action.payload as string;
      });
    builder.addCase(logout.fulfilled, (state) => {
      state.isLoading = false;
      state.user = null;
    });
  },
});
