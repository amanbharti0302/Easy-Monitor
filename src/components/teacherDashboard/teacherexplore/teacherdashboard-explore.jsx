import React from 'react';
import './teacher-dashboard-explore-styles.css';
import BasicCard from '../../cards/basic-card.jsx';
import SubjectCard from '../../cards/subject-card.jsx';
import GraphCard from '../../cards/graph-card.jsx';
import StudentCard from '../../cards/student-card.jsx';
import DendoCard from '../../cards/dendogram-card.jsx';

const DashBoardExplore = ({user})=>{
    return(
        <div className="teacher-explore-body">
            <div className="teacher-title">
                <h2 className="teacher-title-text">Explore</h2>
            </div>
            <div className="cards">
				<GraphCard title="Class Performance (test wise)"  data_labels={['one','two','three','four','five']} data_values={[80,82,79,86,91]} y_label="%Avg. Marks"/>
				<DendoCard/>
				<StudentCard user={user}/>
			</div>
        </div>
    )
}

export default DashBoardExplore;

//import LargeCard from '../cards/large-rect-card.jsx';