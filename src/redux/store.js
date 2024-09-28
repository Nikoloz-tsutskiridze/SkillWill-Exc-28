import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./mySlice";

const store = configureStore({
  reducer: {
    myData: myReducer,
  },
});

export default store;
