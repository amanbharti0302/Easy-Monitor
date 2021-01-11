import './explore.css';
import CardGen from '../../../student-cardgenerator/cardgen.jsx';

const Explore=({currsubject})=>{
	let cards=[];
	for(let i=0;i<currsubject.length;i++){
		cards.push(<CardGen key={i} subject={currsubject[i]}/>)
	}
	return(
		<div>
			<h2 className="title-text">Explore</h2>
            {cards}
		</div>
	);
}

export default Explore;