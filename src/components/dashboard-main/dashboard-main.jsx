import './dashboard-main-styles.css';
import Home from './home-route/home.jsx';
import Explore from './explore-route/explore.jsx';
import MyFiles from './myfiles-route/myfiles.jsx';
import ContactUs from './contactus-route/contactus.jsx';

const DashBoardMain=({route,user,currsubject})=>{	
	if(currsubject==='ALL')
		currsubject=user.subjects;
	else
		currsubject=[currsubject];

	let dashboard;
	if(route==='home')
		dashboard=<Home/>
	else if(route==='explore')
		dashboard=<Explore currsubject={currsubject}/>
	else if(route==='myfiles')
		dashboard=<MyFiles currsubject={currsubject} user={user}/>
	else
		dashboard=<ContactUs/>
	
	return(
        <div className="main-body">
            <div className="title">
                {dashboard}
            </div>
        </div>
    )
}

export default DashBoardMain;