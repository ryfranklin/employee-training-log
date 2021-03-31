import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import counterReducer from '../adapters/redux/counter/counterSlice';
import meetingProdedureReducer from '../adapters/redux/meetingProcedure/meetingProcedure.slice';

const rootReducer = combineReducers({
  counter: counterReducer,
  meetingProcedure: meetingProdedureReducer
})


const store = configureStore({
  rootReducer
})


export default store;