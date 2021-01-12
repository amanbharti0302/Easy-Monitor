import './basic-card-styles.css';

const PopupCard=(props)=>{
    const student={
        name: "Sakshi",
        coursename: "subject_name",
        attendence: "75%",
        plagiarism: ['t1','t2','t3'],
    }
    console.log(props.togglePopup);
    return(
        <div className="popup">
            <div className="overlay"></div>
            <div className="content">
                <div className="close-btn" onClick={props.togglePopup}>&times;</div>
                <div className="student-info">
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                </div>
            </div>
        </div>
    )
}

export default PopupCard;