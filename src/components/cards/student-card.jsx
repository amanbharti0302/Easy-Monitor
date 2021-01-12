import {Component} from 'react';
import './basic-card-styles.css';
import PopupCard from '../cards/student-card-popup.jsx';

class StudentCard extends Component{
    constructor(){
        super();
        this.state={
            roll: "1804001",
            popup: false
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
        this.togglePopup();
    }
    togglePopup=()=>{
        this.setState({
            popup: !this.state.popup
        })
    }
    render(){
        console.log(this.state.popup);
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
<<<<<<< HEAD
=======
                {
                    this.state.popup?
                    <PopupCard togglePopup={this.togglePopup}/>:<div></div>
                }
>>>>>>> stu-dashboard
            </div>
        );
    }
}

export default StudentCard;