import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";

interface Order {
  id?: string;
  name: string;
  quantity: number;
  price: number;
  date: string;
}

interface OrderState {
  orders: Order[];
  loading: boolean;
  error: string | null;
}

const initialState: OrderState = {
  orders: [],
  loading: false,
  error: null,
};

// createAsyncThunk para manejar la operación asíncrona
export const addOrderAsync = createAsyncThunk(
  "order/addOrder",
  async (orderData: Order, { rejectWithValue }) => {
    try {
      const docRef = await addDoc(collection(db, "orders"), orderData);
      return { ...orderData, id: docRef.id }; // Devuelve el pedido con el ID de Firebase
    } catch (error) {
      return rejectWithValue("Error al guardar el pedido en Firebase");
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrders: (state, action: PayloadAction<Order[]>) => {
      state.orders = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addOrderAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addOrderAsync.fulfilled, (state, action: PayloadAction<Order>) => {
        state.loading = false;
        state.orders.push(action.payload);
      })
      .addCase(addOrderAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setOrders } = orderSlice.actions;
export default orderSlice.reducer;
