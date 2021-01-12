import {Component} from 'react';
import './basic-card-styles.css';
import StudentCardPopup from '../cards/student-card-popup.jsx';

class StudentCard extends Component{
    constructor(){
        super();
        this.state={
            roll: "1804001"
        }
    }
    onChange=(event)=>{
        this.setState({
            roll: event.target.value, //text
            student_data: ""
        });
    }
    onSubmit=()=>{
        //fetch() and receive student data via student roll and course name/code
        console.log(this.state.roll);
    }
    render(){
        //console.log(this.state);
        return(
            <div className="card-body">
                <div className="card-head-text">
                    <h2>Student Details</h2>
                </div> 
                <div className="sub-body">
                    <h3>Select Student:</h3>
                    <label id="roll-label">Roll No.</label>
                    <input className="submit-input" type="text" onChange={this.onChange} value={this.state.roll}/>
                    <input className="submit-btn" type="submit" onClick={this.onSubmit} value="submit"/>
                </div>
                <StudentCardPopup/>
            </div>
        );
    }
}

export default StudentCard;