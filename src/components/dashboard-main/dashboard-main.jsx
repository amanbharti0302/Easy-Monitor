import './dashboard-main-styles.css';

import Student_Home from './student/home-route/home.jsx';
import Student_Explore from './student/explore-route/explore.jsx';
import Student_MyFiles from './student/myfiles-route/myfiles.jsx';
import Student_ContactUs from './student/contactus-route/contactus.jsx';
import student_background from '../../assets/images/student1.png';

import Professor_Home from './professor/home-route/home.jsx';
import Professor_Explore from './professor/explore-route/explore.jsx';
import Professor_MyFiles from './professor/myfiles-route/myfiles.jsx';
import Professor_ContactUs from './professor/contactus-route/contactus.jsx';
import professor_background from '../../assets/images/professor1.png'

const DashBoardMain=({route,user,currsubject,isstudent})=>{	
	if(currsubject==='ALL')
		currsubject=user.subjects;
	else
		currsubject=[currsubject];

	let dashboard,background;
	if(isstudent)
	{
		background=student_background;
		if(route==='home') dashboard=<Student_Home/>;
		else if(route==='explore') dashboard=<Student_Explore currsubject={currsubject}/>;
		else if(route==='myfiles') dashboard=<Student_MyFiles currsubject={currsubject} user={user}/>;
		else dashboard=<Student_ContactUs/>;
	}
	else
	{
		background=professor_background;
		if(route==='home') dashboard=<Professor_Home/>;
		else if(route==='explore') dashboard=<Professor_Explore currsubject={currsubject}/>;
		else if(route==='myfiles') dashboard=<Professor_MyFiles currsubject={currsubject} user={user}/>;
		else dashboard=<Professor_ContactUs/>;
	}
	return(
        <div className="main-body">
        	<div className="main-background" style={{backgroundImage: `url(${background})`}}></div>
        	{dashboard}
        </div>
    )
}

export default DashBoardMain;