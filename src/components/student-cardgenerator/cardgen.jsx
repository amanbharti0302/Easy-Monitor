import './cardgen.css';
import BasicCard from '../cards/basic-card.jsx';
//import LargeCard from '../cards/large-rect-card.jsx';

const cardgen=()=>{
	return(
		<div className="cards">
			<BasicCard/>
			<BasicCard/>
			<BasicCard/>
			<BasicCard/>
		</div>
	);
}

export default cardgen;