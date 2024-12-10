import { TypedUseSelectorHook, useSelector } from "react-redux";
import { TypeRootState } from "../store";

// общий тип state не reducer

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> =
  useSelector;
