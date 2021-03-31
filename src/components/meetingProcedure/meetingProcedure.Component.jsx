import React from 'react'
import MeetingProcedureForm from './meetingProcedure.Form';
import MeetingProcedureDataTable from './meetingProcedureDataTable.component';
class MeetingProcedure extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            meetingProcedure:[],
            message:"",
        }

        this.callbackFunction = this.callbackFunction.bind(this);
        }
    
    callbackFunction = (childData) => {
        this.setState({message: childData})
    }

    render() {
        return(
            <div>
                <MeetingProcedureForm />
                <MeetingProcedureDataTable parentCallback = {this.callbackFunction} />
                <p> {this.state.message} </p>
            </div>
        
        )
    }
}

export default MeetingProcedure;