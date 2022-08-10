import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../configureStore";

const initialState = {
  value: 0,
};

// 미들웨어
const fetchUserById = createAsyncThunk("chat/add", async () => {
  return;
});

// 액션 생성 함수 및 리듀서 역할
export const counterSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.fulfilled, (state, acton: PayloadAction) => {});
  },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
