import React, { Component } from 'react';
import './homepage.css';
import Header from './../../components/homepage-header/header.jsx';
import Footer from './../../components/footer/footer.js';
import Simplecard from './../../components/homepage-card/homepage-card';
import plag from './../../assets/images/plag3.png';
import performance from './../../assets/images/performance.jfif';
import grade from './../../assets/images/grade.jfif';
import attend from './../../assets/images/attend.png'
import Aboutus from "./../../components/aboutus/aboutus";


class HomePage extends Component {
	render() {
		return (
			<div>
				<div className="content-main">
					<Header onLogin={(route) => this.props.history.push(route)} />
					<div className="content">

						<Simplecard
							image={plag}
							title='Plagiarism detection'
							body='It instantly detects if a student has copied from internet or from other students. It clusterizes the copies looking similar ' />
						<Simplecard
							image={grade}
							title='Stay Organised'
							body='It has separate portals for students and professors. Students can have their track of their marks and assignments.' />
						<Simplecard
							image={attend}
							title='Assignment'
							body='It allows professors to assign tasks to students and students can submit their answer sheets using EasyMonitor.' />

						<Simplecard
							image={performance}
							title='Performance tracker'
							body='It shows your subject-wise marks of each subject. You can have a track of your progress by looking at the Bar Graphs' />



					</div>
					<Aboutus /></div>
				<Footer className="footer" />
			</div>
		)
	}
}

export default HomePage;