import { combineReducers } from '@reduxjs/toolkit';

import meetingProcedureReducer from '../redux/meetingProcedure/meetingProcedure.slice';

const rootReducer = combineReducers({
    meetingProcedure: meetingProcedureReducer,
});

export default rootReducer;

