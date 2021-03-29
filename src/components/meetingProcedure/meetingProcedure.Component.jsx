import React from 'react'
import MeetingProcedureForm from './meetingProcedure.Form';

class MeetingProcedure extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            meetingProcedure:[],
        }
        this.parentMeetingProdcure = this.parentMeetingProcedure.bind(this)
    }

    parentMeetingProcedure = (data_from_child) => {
        console.log(data_from_child);
    }

    render() {
        return(
            <div>
                <MeetingProcedureForm 
                    meetingProcedureParent=
                        {this.parentMeetingProcedure.bind(this)} />
                <MeetingProcedureDataTable />
            </div>
        
        )
    }
}

export default MeetingProcedure;