import { configureStore } from '@reduxjs/toolkit';
import { counterSlices } from '../slices/counterSlices';

//configureStore
const store = configureStore({
    reducer: {
        counter: counterSlices
    }
});
export default store
// The store now has redux-thunk added and the Redux DevTools Extension is turned on