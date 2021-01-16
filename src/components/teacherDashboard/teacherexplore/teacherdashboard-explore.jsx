import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './teacher-dashboard-explore-styles.css';
import BasicCard from '../../cards/basic-card.jsx';
import SubjectCard from '../../cards/subject-card.jsx';
import GraphCard from '../../cards/graph-card.jsx';
import StudentCard from '../../cards/student-card.jsx';
import DendoCard from '../../cards/dendogram-card.jsx';
import $ from 'jquery';

class DashBoardExplore extends Component{
    constructor(props){
        super(props);
        this.state={
            rollno: "01",
            coursecode: this.props.user.course[0].coursecode,
            popup: false
        }
    }

    onSubChange=(event)=>{
        this.setState({
            coursecode: event.target.value
        });
    }

    render(){
        const {user} = this.props;
        let options=[],performance=[],len=[];
        for(let i=0;i<this.props.user.course.length;i++)
        options.push(<option key={i} value={this.props.user.course[i].coursecode}>{this.props.user.course[i].coursecode}</option>);
        
        $.post('https://hacknitpback.herokuapp.com/course/getcourseperformance',{coursecode:this.state.coursecode},(data)=>{
            if(data.status=='success'){
                for(var j=0;j<performance.length;j++)if(performance[i]==null)performance[i]=0;
                performance=data.message;
                var i=0;
                len = performance.map((el)=>{i++;return i;})
                len.push(i+1);
            }
        }).then(()=>{
            ReactDOM.render(<GraphCard title="Class Performance (test wise)"  data_labels={len} data_values={performance} y_label="%Avg. Marks"/>,document.getElementById('performance-card'));
        })  

    return(
        <div className="teacher-explore-body">
            <div className="teacher-title">
                <h2 className="teacher-title-text">Explore</h2>
            </div>
            
            <div className="cards">
                <div>
                <select className="submit-input" onChange={this.onSubChange}>
                        {options}
                </select>
				<div id="performance-card"><GraphCard title="Class Performance (test wise)"  data_labels={len} data_values={performance} y_label="%Avg. Marks"/></div>
                </div>
                <DendoCard/>
				<StudentCard user={user}/>
			</div>

        </div>
    )
    }
}

export default DashBoardExplore;

//import LargeCard from '../cards/large-rect-card.jsx';