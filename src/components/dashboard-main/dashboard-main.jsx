import './dashboard-main-styles.css';
import Home from './home-route/home.jsx';
import Explore from './explore-route/explore.jsx';
import MyFiles from './myfiles-route/myfiles.jsx';
import ContactUs from './contactus-route/contactus.jsx';
import student_background from '../../assets/images/student1.png';
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
		if(route==='home')
			dashboard=<Home/>;
		else if(route==='explore')
			dashboard=<Explore currsubject={currsubject}/>;
		else if(route==='myfiles')
			dashboard=<MyFiles currsubject={currsubject} user={user}/>;
		else
			dashboard=<ContactUs/>;
	}
	else
	{
		background=professor_background;
	}
	return(
        <div className="main-body"
        	style={
        		{
        			backgroundImage: `url(${background})`
        		}
        	}
        >
        	{dashboard}
        </div>
    )
}

export default DashBoardMain;

/*
style={
         	{
         		backgroundSize: '100%',
         		backgroundRepeat: 'no-repeat',
         		backgroundAttachment: 'fixed',
         		backgroundPosition: 'center',
         		backgroundImage: `url(${student_background})`
         	}
         }
         */