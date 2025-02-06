import { configureStore } from "@reduxjs/toolkit";
import timeReducer from "./timeSlice";
import loggerMiddleware from "./loggerMiddleware";
const store = configureStore({
  reducer: {
    time: timeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
