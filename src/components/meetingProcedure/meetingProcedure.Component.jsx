import React from 'react'
import MeetingProcedureForm from './meetingProcedure.Form';

class MeetingProcedure extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            meetingProcedure:[],
        }
    }

    render() {
        return(
            <div>
                <MeetingProcedureForm />
            </div>
        
        )
    }
}

export default MeetingProcedure;