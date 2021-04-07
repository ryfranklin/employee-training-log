import React from 'react';
import { connect } from 'react-redux';


class MeetingProcedureDataGrid extends React.Component {
    // constructor(props) {
    //     super(props);
    //     // this.mapEmployees = this.mapEmployees.bind(this)
    // }

    // mapEmployees = () => {
    //     meetingProcedure.emp
    // }

    render() {
        return (
        <div>
            {this.props.meetingProcedure.employees
            ?<div>
            <h1>{`The following have been committed...`}</h1>
             <h1>{`Title: ${this.props.meetingProcedure.title}` }</h1>
             <h1>{`Meeting Or Procedure: ${this.props.meetingProcedure.meetingProcedure}`}</h1>
                {this.props.meetingProcedure.employees.map((employee, indexer) => (
                    <h2>{`Employee ${indexer+1}: ${employee}`}</h2>
             ))}
             </div>
            : ''
            }
        </div>
        )
    }

    
}
    

const mapStateToProps = (state) => state.meetingProcedure


export default connect(mapStateToProps)(MeetingProcedureDataGrid)



