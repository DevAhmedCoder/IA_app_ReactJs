import { createSlice } from "@reduxjs/toolkit";
import { requestPostIaAction } from "../actions/requestAction";

export const requestIaSlice = createSlice({
  name: "requestIa",
  initialState: {
    items: [],
    isLoading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(requestPostIaAction.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(requestPostIaAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    });
    builder.addCase(requestPostIaAction.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default requestIaSlice.reducer;
