import React from 'react';
import { connect } from 'react-redux';





function MeetingProcedureDataGrid({meetingProcedure}) {


    return (

        <div>
            <h1>{meetingProcedure?meetingProcedure.title:null}</h1>
            
        </div>
    )
}

const mapStateToProps = (state) => state.meetingProcedure


export default connect(mapStateToProps)(MeetingProcedureDataGrid)



