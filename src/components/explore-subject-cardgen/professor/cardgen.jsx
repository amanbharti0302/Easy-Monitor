import '../cardgen.css';
import BasicCard from '../../cards/basic-card.jsx';
import GraphCard from '../../cards/graph-card.jsx';
import StudentCard from '../../cards/student-card.jsx';
//import LargeCard from '../cards/large-rect-card.jsx';

const cardgen=({currsubject,user})=>{
	return(
		<div className="cards">
			<GraphCard title="Class Performance (test wise)"  data_labels={['one','two','three','four','five']} data_values={[80,82,79,86,91]} y_label="%Avg. Marks"/>
			<div className="card-body">
	            <div className="card-head-text">
	                <h2>Forging Clustering (detecting most probable grouping within)</h2>
	            </div>
	            <p className="sub-text">
	                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repellat illo ducimus beatae commodi, perspiciatis, repellendus quaerat quae quos atque sapiente id laboriosam totam voluptas soluta! Commodi cum a in.
	            </p>
        	</div>
			<StudentCard/>
		</div>
	);
}

export default cardgen;
/*
<GrapgCard title="Subject Details"/>
*/