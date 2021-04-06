import React from 'react'
import MeetingProcedureForm from './meetingProcedure.Form';
import MeetingProcedureDataGrid from './meetingProcedureDataGrid.component';

class MeetingProcedure extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            meetingProcedure:[],
            message:"",
        }

        }
    
    callbackFunction = (childData) => {
        this.setState({message: childData})
    }

    render() {
        return(
            <div>
                <MeetingProcedureForm />
                <MeetingProcedureDataGrid />
                
            </div>
        
        )
    }
}

export default MeetingProcedure;