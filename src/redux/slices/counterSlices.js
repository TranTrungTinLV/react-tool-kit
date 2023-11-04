import { createAction, createReducer } from "@reduxjs/toolkit";

export const increment = createAction('increment/counter');
export const decrement = createAction('decrement/counter');
export const increaseAmount = createAction('increaseByAmount/counter')

//reducers

const initialState = { value: 0 }

//1. using builder callback notation
// export const counterSlices = createReducer(initialState, (builder) => {
//     builder.addCase(increment, (state, action) => {
//         state.value++;
//     });
//     builder.addCase(decrement, (state, action) => {
//         state.value--;
//     })
//     builder.addCase(increaseAmount, (state, action) => {
//         state.value += action.payload
//     })
// })

//2. using map object notation
export const counterSlices = createReducer(initialState, {
    [increment]: (state, action) => {
        state.value++;
    },
    [decrement]: (state, action) => {
        state.value--;
    },
    [increaseAmount]: (state, action) => {
        state.value += action.payload;
    }
})