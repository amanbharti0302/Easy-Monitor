import '../cardgen.css';
import BasicCard from '../../cards/basic-card.jsx';
import GraphCard from '../../cards/graph-card.jsx';
//import LargeCard from '../cards/large-rect-card.jsx';

const cardgen=({currsubject,user})=>{
	return(
		<div className="cards">
			<BasicCard title="Class Standing (Ranking in the class)"/>
			<GraphCard title="Marks Monitor (test wise marks graph"/>
			<BasicCard title="Attendence Record (shows total classes and attended classes"/>
		</div>
	);
}

export default cardgen;