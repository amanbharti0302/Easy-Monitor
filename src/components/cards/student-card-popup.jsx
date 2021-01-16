import './basic-card-styles.css';

const PopupCard=(props)=>{
    const student=props.student;
    let plagiarism=[];
    for(let i=0;i<student.plagiarism.length;i++)
        plagiarism.push(<p key={i}>plagiarism in {student.plagiarism[i]}: ...</p>)
    return(
        <div className="popup">
            <div className="overlay"></div>
            <div className="content">
                <div className="close-btn" onClick={props.togglePopup}>&times;</div>
                <div className="student-info">
                    <p>Name: {student.name}</p>
                    <p>Course: {student.coursename}</p>
                    <p>attendence: {student.attendence}</p>
                    {plagiarism}
                </div>
            </div>
        </div>
    )
}

export default PopupCard;