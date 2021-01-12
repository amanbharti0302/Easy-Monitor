import '../cardgen.css';
import BasicCard from '../../cards/basic-card.jsx';
import GraphCard from '../../cards/graph-card.jsx';
import StudentCard from '../../cards/student-card.jsx';
//import LargeCard from '../cards/large-rect-card.jsx';

const cardgen=({subject,user})=>{
	return(
		<div className="cards">
			<div className="subject-right"><p>{subject}</p></div>
			<GraphCard title="Class Performance (test wise)"/>
<<<<<<< HEAD
=======
			<BasicCard title="Forging Clustering (detecting most probable grouping within)"/>
>>>>>>> stu-dashboard
			<StudentCard/>
			<BasicCard title="Forging Clustering (detecting most probable grouping within)"/>
		</div>
	);
}

export default cardgen;
/*
<GrapgCard title="Subject Details"/>
*/
/*


*/