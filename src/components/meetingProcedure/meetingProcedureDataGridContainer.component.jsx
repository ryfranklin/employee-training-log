import React from 'react';
import { connect } from 'react-redux';
import MeetingProcedureDataGrid from '../meetingProcedure/meetingProcedureDataGrid.component'


function MeetingProcedureDataGridContainer(props) {
    return(
    <MeetingProcedureDataGrid title={props.title} />
    )}

const mapStateToProps = function(state) {
    return {
        title: state.title
    }
}

export default connect(mapStateToProps)(MeetingProcedureDataGridContainer);

