import { configureStore } from "@reduxjs/toolkit";
import requestIa from "../slices/requestSlice";

export const store = configureStore({
  reducer: {
    requestIa,
  },
  devTools: true,
});
