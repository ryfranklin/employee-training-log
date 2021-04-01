import React from 'react';
import { connect } from 'react-redux';


class meetingProcedureDataTable extends React.Component {

    render() {
        return (

            <div>
                <h1>Data Data Data</h1>
                { this.state.meetingProcedure }
            </div>
        )
    }
}


const mapStateToProps = (store) => {
    return {meetingProcedure: store.meetingProcedure}
}

export default connect(mapStateToProps)(meetingProcedureDataTable);

