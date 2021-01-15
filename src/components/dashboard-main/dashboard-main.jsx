import './dashboard-main-styles.css';
import {BrowserRouter,Route,Redirect,Switch,Link} from 'react-router-dom';

import StudentHome from './student/home-route/home.jsx';
import StudentExplore from './student/explore-route/explore.jsx';
import StudentMyFiles from './student/myfiles-route/myfiles.jsx';
import StudentContactUs from './student/contactus-route/contactus.jsx';
import student_background from '../../assets/images/student1.png';

import ProfessorHome from './professor/home-route/home.jsx';
import ProfessorExplore from './professor/explore-route/explore.jsx';
import ProfessorMyFiles from './professor/myfiles-route/myfiles.jsx';
import ProfessorContactUs from './professor/contactus-route/contactus.jsx';
import professor_background from '../../assets/images/professor1.png'

const DashBoardMain=({route,user,currsubject,isstudent})=>{	
		currsubject=currsubject;

	let dashboard,background;
	if(isstudent)
	{
		background=student_background;
		dashboard=
		<Switch>
			<Route exact path="/login-student/">
				<Redirect to="/profile/Home"/>
			</Route>
			<Route exact path="/profile/Home">
				<StudentHome user={user}/>
			</Route>
			<Route exact path="/profile/Explore">
				<StudentExplore currsubject={currsubject} user={user}/>
			</Route>
			<Route exact path="/profile/MyFiles">
				<StudentMyFiles currsubject={currsubject} user={user}/>
			</Route>
			<Route exact path="/profile/ContactUs">
				<StudentContactUs/>
			</Route>
		</Switch>
		// if(route==='home') dashboard=<StudentHome user={user}/>;
		// else if(route==='explore') dashboard=<StudentExplore currsubject={currsubject} user={user}/>;
		// else if(route==='myfiles') dashboard=<StudentMyFiles currsubject={currsubject} user={user}/>;
		// else dashboard=<StudentContactUs/>;
	}
	else
	{
		background=professor_background;
		dashboard=
		<Switch>
			<Route exact path="/login-teacher/">
				<Redirect to="/profile/Home"/>
			</Route>
			<Route exact path="/profile/Home">
				<ProfessorHome user={user}/>
			</Route>
			<Route exact path="/profile/Explore">
				<ProfessorExplore currsubject={currsubject} user={user}/>
			</Route>
			<Route exact path="/profile/MyFiles">
				<ProfessorMyFiles currsubject={currsubject} user={user}/>
			</Route>
			<Route exact path="/profile/ContactUs">
				<ProfessorContactUs/>
			</Route>
		</Switch>
		// if(route==='home') dashboard=<ProfessorHome user={user}/>;
		// else if(route==='explore') dashboard=<ProfessorExplore currsubject={currsubject} user={user}/>;
		// else if(route==='myfiles') dashboard=<ProfessorMyFiles currsubject={currsubject} user={user}/>;
		// else dashboard=<ProfessorContactUs/>;
	}
	return(
        <div className="main-body">
			<div className="main-background" style={{backgroundImage: `url(${background})`}}></div>
        	{dashboard}
        </div>
    )
}

export default DashBoardMain;