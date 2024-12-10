import { createAsyncThunk } from "@reduxjs/toolkit";
import { PropsUserAsyncThunk, ReturnUser } from "./user.interface";

// createAsyncThunk<Returned, ThunkArg, ThunkApiConfig>()
// - Returned – тип возвращаемого санком значения
// - ThunkArg – тип аргумента санка
// - ThunkApiConfig – тип конфига, его разберем ниже

export const fetchUserById = createAsyncThunk<
  ReturnUser,
  PropsUserAsyncThunk,
  { rejectValue: string }
>("users/auth", async ({ email, password }, { rejectWithValue }) => {
  return new Promise<ReturnUser>((resolve, reject) => {
    // Важно, чтобы Promise использовал reject
    setTimeout(() => {
      console.log("tyt");
      if (email === "test@example.com" && password === 123456) {
        console.log("ok");
        resolve({ email: "test@example.com", password: 123456 });
      } else {
        console.log("err");
        // используя reject здесь важно, чтобы промис был отклонен
        reject(rejectWithValue("User not found"));
      }
    }, 2000);
  });
});

export const logout = createAsyncThunk("auth/logout", async () => {
  // тут метод для удаления токенов
});
