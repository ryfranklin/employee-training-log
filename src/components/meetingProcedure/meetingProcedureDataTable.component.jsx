import React from 'react';

class MeetingProcedureDataTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.columns = [
            {key: "id", name: "ID", editable: true}
        ]
    }



    render() {
        return(
            <h1>Data Will Go Here!!!</h1>

        )
    }
}

export default MeetingProcedureDataTable;