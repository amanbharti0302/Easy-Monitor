import './dropdown.css';

const Dropdown=({user_subjects,currsubject,onSubChange})=>{
	let options=[];
    for(let i=0;i<user_subjects.length;i++)
        options.push(<div key={i} onClick={(event)=>onSubChange(event.target.innerHTML)}>{user_subjects[i]}</div>);
	return(
		<div className="dropdown">
            <div className="dropdown-btn">{currsubject}</div>
            <div className="dropdown-content">
                {options}
            </div>
        </div>
	);
}

export default Dropdown;