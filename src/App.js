import React from 'react'
import MeetingProcedure from '../src/components/meetingProcedure/meetingProcedure.Component';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>  
            <MeetingProcedure />
            </div>
        )
    }
}

export default App;
