import { createSlice } from "@reduxjs/toolkit"

const initialState = {
     value: 0
}

export const counterSlice = createSlice({
     name: "counter",
     initialState,
     reducers : {
          increment : (state) => {
               state.value += 1; //Imer is manipulating the state directly.
          },

          decrement : (state) => {
               state.value -= 1; //Imer is manipulating the state directly.
          },

          reset : (state) => {
               state.value = 0; //Imer is manipulating the state directly.
          },
     }
})

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;
