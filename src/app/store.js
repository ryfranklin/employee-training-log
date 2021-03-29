import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../adapters/redux/counter/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
