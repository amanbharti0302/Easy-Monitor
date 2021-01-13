import '../cardgen.css';
import BasicCard from '../../cards/basic-card.jsx';
import GraphCard from '../../cards/graph-card.jsx';
import StudentCard from '../../cards/student-card.jsx';
//import LargeCard from '../cards/large-rect-card.jsx';

const cardgen=({currsubject,user})=>{
	return(
		<div className="cards">
			<GraphCard title="Class Performance (test wise)"/>
			<BasicCard title="Forging Clustering (detecting most probable grouping within)"/>
			<StudentCard/>
		</div>
	);
}

export default cardgen;
/*
<GrapgCard title="Subject Details"/>
*/