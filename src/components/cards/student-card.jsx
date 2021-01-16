import {Component} from 'react';
import './basic-card-styles.css';
import PopupCard from './student-card-popup.jsx';

const student={
    name: "Sakshi",
    coursename: "subject_name",
    attendence: "75%",
    plagiarism: ['t1','t2','t3']
};
class StudentCard extends Component{
    constructor(props){
        super(props);
        this.state={
            rollno: "01",
            coursecode: this.props.user.course[0].coursecode,
            popup: false
        }
    }
    onRollChange=(event)=>{
        this.setState({
            rollno: event.target.value
        });
    }
    onSubChange=(event)=>{
        this.setState({
            coursecode: event.target.value
        });
    }
    onSubmit=()=>{
        fetch('http://localhost:12345/text/assignment-details',{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(
            {
                rollno: this.state.rollno,
                coursecode: this.state.coursecode
            })
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            this.togglePopup();
        })
        /*
        fetch('http://localhost:12345/python/plagiarism',{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(
            {
                roll: 0,
                text: "Digital image processing is the use of a digital computer to process digital images through an algorithm.[1][2] As a subcategory or field of digital signal processing, digital image processing has many advantages over analog image processing. It allows a much wider range of algorithms to be applied to the input data and can avoid problems such as the build-up of noise and distortion during processing."
            }
          )
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            this.togglePopup();
        })
        .catch(err=>alert("failed to scrap web"))
        */
        //this.togglePopup();
        //fetch() and receive student data via student roll and course name/code
        //console.log(this.state.roll);
    }
    togglePopup=()=>{
        this.setState({
            popup: !this.state.popup
        })
    }
    render(){
        let options=[];
        for(let i=0;i<this.props.user.course.length;i++)
            options.push(<option key={i} value={this.props.user.course[i].coursecode}>{this.props.user.course[i].coursecode}</option>);
        return(
            <div className="card-body">
                <div className="card-head-text">
                    <h2>Student Details</h2>
                </div> 
                <div className="sub-body">
                    <p style={{marginTop:"2px"}}>You can view student's plagiarism details here</p>
                    <h3>Select Student:</h3>
                    <p id="roll-label" style={{margin:0}}>Roll No.</p>
                    <input className="submit-input" type="text" onChange={this.onRollChange} value={this.state.roll}/>
                    <p id="roll-label" style={{marginBottom:0}}>Subject</p>
                    <select className="submit-input" onChange={this.onSubChange}>
                        {options}
                    </select>
                    <input className="submit-btn" type="submit" onClick={this.onSubmit} value="submit"  style={{marginTop:"20px"}}/>
                </div>
                {
                    this.state.popup?
                    <PopupCard togglePopup={this.togglePopup} student={student}/>:<div></div>
                }
            </div>
        );
    }
}

export default StudentCard;