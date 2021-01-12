import './explore.css';
import CardGen from '../../../explore-subject-cardgen/professor/cardgen.jsx';

const Explore=({currsubject,user})=>{
	let cards=[];
	for(let i=0;i<currsubject.length;i++){
		cards.push(<CardGen key={i} subject={currsubject[i]} user={user}/>)
	}
	return(
		<div>
			<h2 className="title-text">Explore</h2>
            {cards}
		</div>
	);
}

export default Explore;