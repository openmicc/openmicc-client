import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppState } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// TODO: Fix this typing?
// export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
