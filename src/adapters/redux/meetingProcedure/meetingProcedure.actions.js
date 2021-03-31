import { ADD_MEETING_PROCEDURE } from './meetingProcedure.constants';

export const addMeetingProcedure = (meetingProcedureRecords) => ({
    type: "ADD_MEETING_PROCEDURE",
    payload: meetingProcedureRecords
});