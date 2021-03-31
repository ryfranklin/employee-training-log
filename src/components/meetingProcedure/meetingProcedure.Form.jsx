import { TextField, 
         Button,
         RadioGroup, 
         Radio, 
         FormLabel, 
         Select,
         Chip,
         MenuItem,
         InputLabel,
         Input,
         FormControlLabel } from '@material-ui/core';
import React from 'react'
import { connect, useDispatch } from 'react-redux';
import MeetingOrProcedure from './meetingProcedure.Component';
import { addMeetingProcedure } from '../../adapters/redux/meetingProcedure/meetingProcedure.actions';

export const Mcontext = React.createContext(); //exporting context object

class MeetingProcedureForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            meetingProcedure: '',
            employees:[]
        }

        this.meetingProcedureData = []

        this.names = [
            'Oliver Hansen',
            'Van Henry',
            'April Tucker',
            'Ralph Hubbard',
            'Omar Alexander',
            'Carlos Abbott',
            'Miriam Wagner',
            'Bradley Wilkerson',
            'Virginia Andrews',
            'Kelly Snyder',
          ];

        this.meetingProcedureRecords = {
            id: '',
            title: '',
            meetingProcedure: '',
            employeeName: '',
        }
     
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleMeetingProcedureRadioChange = this.handleMeetingProcedureRadioChange.bind(this);
        this.handleEmployeeDropDownChange = this.handleEmployeeDropDownChange.bind(this);
        this.handleEmployeeDropDownChange = this.handleEmployeeDropDownChange.bind(this);
        this.handleFormOnClickSumbit = this.handleFormOnClickSumbit.bind(this);
        this.sendData = this.sendData.bind(this);  
    }



    handleTitleChange = (event) => {
        this.setState({title: event.target.value});
      }

    handleMeetingProcedureRadioChange(event) {
        this.setState({meetingProcedure: event.target.value})
    }

    handleEmployeeDropDownChange(event) {
        this.setState({employees: event.target.value});
    }

    handleFormOnClickSumbit(event) {
        event.preventDefault();
        if (this.state.title === '') {
            alert("A title must be entered!!")
        }
        if (this.state.meetingProcedure === '') {
            alert("A meeting or procedure must be selected")
        }
        if (this.state.employees === '') {
            alert("A employee must be selected")
        }
        else {
            this.setState({ meetingProcedure:"" });
            console.log(this.meetingProcedureData);  
        }
    }

    render() {
        return(


          <div>
          <form>
            <TextField
                placeholder="Enter a title:"
                value={this.state.title}
                required
                onChange={this.handleTitleChange}
            />
    
            <FormLabel component="legend">MeetingOrProcedure</FormLabel>
            <RadioGroup name="meetingProcedure" value={this.state.meetingProcedure} onChange={this.handleMeetingProcedureRadioChange}>
                <FormControlLabel value="meeting" control={<Radio />} label="Meeting" />
                <FormControlLabel value="procedure" control={<Radio />} label="Procedure" />

            </RadioGroup>


         
            <InputLabel id="demo-mutiple-chip-label">Chip</InputLabel>
            <Select
                labelId="demo-mutiple-chip-label"
                id="demo-mutiple-chip"
                multiple
                value={this.state.employees}
                onChange={this.handleEmployeeDropDownChange}
                input={<Input id="select-multiple-chip" />}
                renderValue={(selected) => (
                    <div>
                    {selected.map((value) => (
                        <Chip key={value} label={value} />
                    ))}
                    </div>
                )}
                MenuProps={this.MenuProps}
                >
                {this.names.map((name) => (
                    <MenuItem key={name} value={name} >
                    {name}
                    </MenuItem>
                ))}
            </Select>
     

            <Button 
                variant="contained"
                color="primary"
                onClick={this.handleFormOnClickSumbit}
                >Enter</Button>
            
          </form>

          <div>
              <h1>{this.state.title}</h1>
              <h1>{this.state.meetingProcedure}</h1>
              <h1>{this.state.employees}</h1>
         
          </div>


          </div>
  

        )
    }
};
const mapDispatchToProps = dispatch => {
    return { addMeetingProcedure: text => dispatch(addMeetingProcedure(text))}
};



export default MeetingProcedureForm;