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
							image={grade}
							title='Evaluation'
							body='Instantly go from group chat tan meet in one plac no matter how many places theyre in blah blah blah.' />
						<Simplecard
							image={plag}
							title='Plagiarism detection'
							body='Instantly go from can meet in one place no matter how many places theyre in  blah blah blah.' />
						<Simplecard
							image={attend}
							title='Attendance'
							body='Instantly go from group chat to vide can meet in one place, no matter how many places theyre in  blah blah blah.' />

						<Simplecard
							image={performance}
							title='Performance tracker'
							body='Instantly go  the touch of a button. Teams of ace	 no matter how many places theye in  blah blah blah.' />



					</div>
					<Aboutus /></div>
				<Footer className="footer" />
			</div>
		)
	}
}

export default HomePage;