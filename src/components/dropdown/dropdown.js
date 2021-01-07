import './dropdown.css';

const Dropdown=({student,subject,onSubChange})=>{
	let options=[];
    const subs=student.subjects;
    options.push(<div key={subs.length} onClick={(event)=>onSubChange(event.target.innerHTML)}>ALL</div>);
    for(let i=0;i<subs.length;i++)
        options.push(<div key={i} onClick={(event)=>onSubChange(event.target.innerHTML)}>{subs[i]}</div>);
	return(
		<div className="dropdown">
            <div className="dropdown-btn">{subject}</div>
            <div className="dropdown-content">
                {options}
            </div>
        </div>
	);
}

export default Dropdown;