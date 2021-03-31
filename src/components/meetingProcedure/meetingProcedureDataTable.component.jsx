import React from 'react';
import { useSelector } from 'react-redux';
class MeetingProcedureDataTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.columns = [
            {key: "id", name: "ID", editable: true}
        ]
        this.records = this.records.bind(this)
    }



    render() {
        return(
            <h1></h1>

        )
    }
}

export default MeetingProcedureDataTable;