import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchGigs, createGig } from "../api/gigApi";

export const getGigs = createAsyncThunk("gigs/get", fetchGigs);
export const addGig = createAsyncThunk("gigs/add", createGig);

const gigSlice = createSlice({
  name: "gigs",
  initialState: {
    list: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGigs.fulfilled, (state, action) => {
      state.list = action.payload.data;
    });
  },
});

export default gigSlice.reducer;
