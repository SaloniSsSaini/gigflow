import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBidsByGig } from "../api/bidApi";

export const getBids = createAsyncThunk("bids/get", fetchBidsByGig);

const bidSlice = createSlice({
  name: "bids",
  initialState: {
    list: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBids.fulfilled, (state, action) => {
      state.list = action.payload.data;
    });
  },
});

export default bidSlice.reducer;
