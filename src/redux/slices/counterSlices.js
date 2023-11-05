import {
    createSlice
} from '@reduxjs/toolkit';

//initialState
const initialState = {
    value: 0
}
export const counterSlices = createSlice({
    name: 'counter', //tên đại diện cho 1 cái Slice cụ thể
    initialState, //trạng thái ban đầu
    reducers: {
        increament: (state, action) => {
            state.value++;

        },
        decrement: (state, action) => {
            state.value--;

        },
    }
});

//generate action creator
export const {
    increament,
    decrement
} = counterSlices.actions;

//expoert reducers
export default counterSlices.reducer;