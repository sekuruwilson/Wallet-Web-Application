import { configureStore } from "@reduxjs/toolkit";
import authFeature from "./features/auth.feature";
import apiSlice from "./features";

export const store = configureStore({
  reducer: {
    login: authFeature.login,
    api: apiSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
