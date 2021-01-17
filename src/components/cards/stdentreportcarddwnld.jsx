import {Component} from 'react';
import $ from 'jquery';
import './basic-card-styles.css';
import PopupCard from './student-card-popup.jsx';
import ReactDOM from 'react-dom';
var student={};
class StudentreportCard extends Component{
    constructor(props){
        super(props);
        this.state={
            rollno: "01",
            coursecode: this.props.user.course[0].coursecode,
            assignment:'',
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
    onassChange=(e)=>{
        this.setState({
            assignment: e.target.value
        });
    }
    onSubmit=()=>{}

    togglePopup=()=>{
        this.setState({
            popup: !this.state.popup
        })
    }

    render(){
        let options=[],options2=[];
        for(let i=0;i<this.props.user.course.length;i++)
            options.push(<option key={i} value={this.props.user.course[i].coursecode}>{this.props.user.course[i].coursecode}</option>);
        
            $.post('https://hacknitpback.herokuapp.com/student/assignment',{"ass": this.state.coursecode},async(data)=>{
                if(data.status=="success")
                await Promise.all(data.message.map(async(el)=>{
                    await $.post("https://hacknitpback.herokuapp.com/student/getassignment",{id:el},(data2)=>{
                        options2.push(<option key={data2._id} value={data2.name}>{data2.name}</option>);
                    })
                }))
            })

        return(
            <div className="card-body">
                <div className="card-head-text">
                    <h2>Download Student Report</h2>
                </div> 
                <div className="sub-body">
                    <p style={{marginTop:"2px"}}>You can download student's answersheet here</p>
                    <p id="roll-label" style={{marginBottom:5}}>Subject</p>
                    <select className="submit-input" onChange={this.onSubChange}>
                        {options}
                    </select>

                    <p id="roll-label" style={{marginBottom:5}}>Assignment</p>
                    <select className="submit-input" id="asschange" onChange={this.onassChange}>
                        {options2}
                    </select>

                    <p id="roll-label" style={{margin:0,marginTop:10}}>Roll No.</p>
                    <input className="submit-input" type="text" onChange={this.onRollChange} value={this.state.roll}/>
                    
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

export default StudentreportCard;