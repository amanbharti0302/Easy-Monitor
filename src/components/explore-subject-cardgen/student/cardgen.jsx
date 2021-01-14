import '../cardgen.css';
import BasicCard from '../../cards/basic-card.jsx';
import GraphCard from '../../cards/graph-card.jsx';
//import LargeCard from '../cards/large-rect-card.jsx';

const cardgen=({currsubject,user})=>{
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
	else	
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
				<GraphCard title="Marks Monitor (test wise marks graph)" data_labels={['one','two','three','four','five']} data_values={[5,12,13,6,11]} y_label="%Marks"/>
			</div>
		);
}

export default cardgen;