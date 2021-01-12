import './cardgen.css';
import BasicCard from '../../cards/basic-card.jsx';
import GraphCard from '../../cards/graph-card.jsx';
//import LargeCard from '../cards/large-rect-card.jsx';

const cardgen=({subject,user})=>{
	return(
		<div className="cards">
			<div className="subject-right"><p>{subject}</p></div>
			<BasicCard title="Class Standing"/>
			<GraphCard title="Marks Monitor"/>
			<BasicCard title="Attendence Record"/>
		</div>
	);
}

export default cardgen;