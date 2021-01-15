const DendoPopupCard=(props)=>{
    return(
        <div className="popup">
            <div className="overlay"></div>
            <div className="content">
                <div className="close-btn" onClick={props.togglePopup}>&times;</div>
                <div className="student-info">
                    DENDOGRAM
                </div>
            </div>
        </div>
    )
}

export default DendoPopupCard;