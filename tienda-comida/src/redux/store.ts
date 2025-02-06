import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./orderSlice"; // Importamos el slice de pedidos
import loggerMiddleware from "../servicios/loggerMiddleware";

export const store = configureStore({
  reducer: {
    order: orderReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),

});

// Tipos para el estado global y dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
