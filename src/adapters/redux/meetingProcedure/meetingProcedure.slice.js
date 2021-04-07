const initialState = {
    meetingProcedure: {
        title: '',
        employees: '',
        meetingProcedure: '',
    }
}
export default function meetingProcedureReducer(state = initialState, action) {
    switch(action.type) {
        case 'meetingProcedure/addMeetingProcedure':
            console.log(`payload: ${action.payload}`)
            return Object.assign({}, state, {
                meetingProcedure: action.payload
            })

        
        default:
            return state
    }
} 