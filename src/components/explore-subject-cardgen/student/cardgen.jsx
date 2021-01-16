import '../cardgen.css';
import $, { extend } from 'jquery';
import BasicCard from '../../cards/basic-card.jsx';
import GraphCard from '../../cards/graph-card.jsx';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
//import LargeCard from '../cards/large-rect-card.jsx';


class cardgen extends Component {
	constructor(){
		super();
		this.state={
			marks:[]
		}
	}

	render(){
	const {currsubject,user}=this.props;
	let course_details=[];
	const attendence="76%";//user.details.
	const rank="#1";//will have to calculate everyones score (fetch() necessary)
	
	for(let i=0;i<user.detail.course.length;i++)
		if(user.detail.course[i].coursecode===currsubject)
			course_details=user.detail.course[i];

	if(currsubject==="course")
		return(
			<p className="title-text" style={{fontSize:"26px", background:"rgba(250,250,250,1)"}}>Select a course to <strong><i>explore</i></strong>.</p>
		);
	else{	
		const rollno = user.detail.rollno;
		
		var marks=[],done=[];
		$.post("https://hacknitpback.herokuapp.com/student/assignment", { "ass": currsubject }, (res) => {
			if (res.status === "success") {
				const assignments = res.message;
				if(assignments.length>0)
				assignments.map((el)=>{
					$.post("https://hacknitpback.herokuapp.com/student/getassignment",{id:el},(data)=>{
						var find =false;
						data.message.student.map((el)=>{
							if(el.rollno==rollno){find=true;done.push({textid:el.id});}
						})
						if(find==false)done.push(null);
					}).then(()=>{
						var temp=[];
						var value=[];
						done.map((el)=>{
							if(el==null)temp.push(0);
							else{
								$.post("http://localhost:12345/student/gettext",{textid:el.textid},(data)=>{
									temp.push(data.message.marks);
								})
								.then(()=>{
									for(var i=1;i<=temp.length+1;i++)value.push(i);
									ReactDOM.render(<GraphCard title="Marks Monitor (test wise marks graph)" data_labels={[1,2,3,4,5]} data_values={temp} y_label="%Marks" />, document.getElementById('stu-graph'));
								})
							}
						});
					})
				})
			}
			else{console.log('error');}
		})

		return(
			<div className="cards">
				<div className="card-body">
		            <div className="card-head-text">
		                <h2>Subject Details</h2>
		            </div>
		            <div className="sub-text">
		                <p><strong>Name</strong> - {course_details.name}</p>
		                <p><strong>Domain Branch</strong> - {course_details.branch}</p>
		            </div>
		        </div>
				<div className="card-body">
		            <div className="card-head-text">
		                <h2>Class Standing (ranking in the class in the selected course)</h2>
		            </div>
		            <p className="sub-text">
		                Congratulation, your standing is <strong style={{fontSize: "27px",color:"purple",padding: "0px 5px"}}>{rank}</strong>
		            </p>
		        </div>
				<div id="stu-graph"></div>
			</div>
		);
}}

}
export default cardgen;