import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async action to fetch data from an API
export const fetchData = createAsyncThunk("myData/fetchData", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
});

const mySlice = createSlice({
  name: "myData",
  initialState: {
    value: 0,
    data: [],
    status: "idle", // for tracking async action status
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { increment, decrement, incrementByAmount } = mySlice.actions;
export default mySlice.reducer;
