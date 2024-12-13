import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestPostIa } from "../../api";

export const requestPostIaAction = createAsyncThunk(
  "requestPost",
  async (state, action) => {
    const resp = await requestPostIa(action.payload);
    return resp;
  }
);
