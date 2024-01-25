// import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";
//
// interface StateType {
//   count: number;
// }
//
// const initialState: StateType = {
//   count: 0,
// };
//
// const increment = createAction("increment");
// const decrement = createAction("decrement");
//
// const rootReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(increment, (state) => {
//       state.count += 1;
//     })
//     .addCase(decrement, (state) => {
//       state.count -= 1;
//     });
// });
//
// export const store = configureStore({
//   reducer: rootReducer,
// });

// -------------------- Using Slice
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type StateType = {
  count: number;
};

const initialState: StateType = {
  count: 0,
};

const rootSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByValue: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

export const store = configureStore({
  reducer: rootSlice.reducer,
});

export const { increment, decrement, incrementByValue } = rootSlice.actions;
