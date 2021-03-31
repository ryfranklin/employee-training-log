import { bindActionCreators } from "redux"

const initialState = {
    meetingProcedureRecords: null
}

  const meetingProcedureReducer = (state = initialState, action) => {
      switch(action.type) {
          case 'ADD_MEETING_PROCEDURE':
              return {
                  ...state,
                  meetingProcedureRecords: action.payload
              }
            default:
                return state;
            }
        }


export default meetingProcedureReducer;