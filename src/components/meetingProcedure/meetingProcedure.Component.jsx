import React from 'react'
import MeetingProcedureForm from './meetingProcedure.Form';
import MeetingProcedureDataGridContainer from './meetingProcedureDataGridContainer.component';

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
                <MeetingProcedureDataGridContainer />
                
            </div>
        
        )
    }
}

export default MeetingProcedure;