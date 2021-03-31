import { createSlice } from '@reduxjs/toolkit';



const initialState = [
  {id:1, title: 'Meeting 1', meetingProcedure: 'Meeting', employeeName: 'Ryan'},
  {id:2, title: 'Meeting 2', meetingProcedure: 'Meeting', employeeName: 'Angelina'},
  {id:3, title: 'Procedure 1', meetingProcedure: 'Prodedure 1', employeeName: 'Ryan'},
]

const meetingProcedureSlice = createSlice( {
  name: 'meetingProcedure',
  initialState,
  reducers: {
    addMeetingProcedure: (state = initialState, action) => {
      state.meetingProcedureData = action.payload
    },
  }}
)

export const { addMeetingProcedure } = meetingProcedureSlice.actions;



export default meetingProcedureSlice.reducer;