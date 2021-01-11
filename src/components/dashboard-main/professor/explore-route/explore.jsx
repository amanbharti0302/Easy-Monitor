import './explore.css';
import CardGen from '../../../student-cardgenerator/cardgen.jsx';

const Explore=({subjects})=>{
	return(
		<div>
			<h2 className="title-text">Explore</h2>
            <CardGen/>
		</div>
	);
}

export default Explore;