import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface ExampleState {
    currentTime: number;
    error?: string;
    loading: boolean
   }
const initialState: ExampleState = {
    currentTime: Date.now(),
    loading: false
};
// const timeSlice = createSlice({
//   name: "time",
//   initialState,
//   reducers: {
//     fetchNewTime: (state) => {
//       state.currentTime = Date.now();
//     },
//   },
// });

export const fetchNewTime = createAsyncThunk<
  number,
  void,
  { rejectValue: string }
>("time/fetchNewTime", async (_input_payload, { rejectWithValue }) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // simulamos espera 2s
    const success = Math.random() > 0.5; // 50% posibilidades de error
    if (!success) throw new Error("Error obteniendo la hora");
    return Date.now();
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

const timeSlice = createSlice({
    name: "time",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    builder
    .addCase(fetchNewTime.pending, (state) => {
    state.loading = true;
    state.error = undefined;
    })
    .addCase(fetchNewTime.fulfilled, (state, action: PayloadAction<number>) => {
    state.currentTime = action.payload;
    state.loading = false;
    })
    .addCase(fetchNewTime.rejected, (state, action: PayloadAction<string | undefined>) => {
    state.loading = false;
    state.error = action.payload || "Error desconocido";
    });
    },
   });

export default timeSlice.reducer;
