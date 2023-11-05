import { configureStore } from '@reduxjs/toolkit';
// import { counterSlices } from '../slices/counterSlices';
// import counterReducer from '../slices/counterSlices'
import postReducer from "../slices/createThunk";
//configureStore
const store = configureStore({
    reducer: {
        post: postReducer
    }
});
export default store
// The store now has redux-thunk added and the Redux DevTools Extension is turned on