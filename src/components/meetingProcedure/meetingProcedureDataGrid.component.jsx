import React from 'react';
import { connect } from 'react-redux';






function MeetingProcedureDataGrid({meetingProcedure}) {

    return (
        <div> 
            <h1>{meetingProcedure.title}</h1>
            <h1>{meetingProcedure.meetingProcedure}</h1>
            <h1>{meetingProcedure.employees}</h1>
        </div>
        
    )

}




const mapStateToProps = (state) => state.meetingProcedure


export default connect(mapStateToProps)(MeetingProcedureDataGrid)



