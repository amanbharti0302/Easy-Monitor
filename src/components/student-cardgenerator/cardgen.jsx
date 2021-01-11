import './cardgen.css';
import BasicCard from '../cards/basic-card.jsx';
import GrapgCard from '../cards/graph-card.jsx';
//import LargeCard from '../cards/large-rect-card.jsx';

const cardgen=({subject})=>{
	return(
		<div className="cards">
			<div className="subject-right"><p>{subject}</p></div>
			<BasicCard title="Class Standing"/>
			<GrapgCard title="Marks Monitor"/>
			<GrapgCard title="Attendence Record"/>
		</div>
	);
}

export default cardgen;