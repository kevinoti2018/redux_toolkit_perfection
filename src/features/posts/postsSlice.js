import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "first post", content: "hello" },
  { id: 2, title: "second post", conent: "world" }
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {}
});

export default postSlice.reducer;
