import {
    createAsyncThunk,
    createSlice
} from '@reduxjs/toolkit';
import axios from 'axios';
export const fetchPost = createAsyncThunk('post/list', async (payload, {
    rejectWithValue,
    getState,
    dispatch
}) => {
    try {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return data
    } catch (error) {
        return error?.response
    }
})

//Slices
const postSlices = createSlice({
    name: "post",
    initialState: {},
    extraReducers:{
        //Handling pending state
        [fetchPost.pending]: (state,action)=>{
            state.loading = true;
        },
        //Handling pending state
        [fetchPost.fulfilled]: (state,action)=>{
            state.postsList = action.payload;
            state.loading = false;
        },
        //Handling rejected state
        [fetchPost.rejected]: (state,action)=>{
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export default postSlices.reducer;