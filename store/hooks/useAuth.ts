import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { userSlice } from "../user/user.slice";
import { useTypedSelector } from "./useTypedSelector";

export const useAuth = () => useTypedSelector((state) => state.user);

const userActions = userSlice.actions;

export const useUserActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(userActions, dispatch), [dispatch]);
};

// const { fetchUserById, logout } = useActions();
// const { errorMessage, isLoading, user } = useAuth();
