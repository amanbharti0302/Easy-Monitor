import './basic-card-styles.css';

const BasicCard = ()=>{
    const student={
        name: "Sakshi",
        coursename: "subject_name",
        attendence: "75%",
        plagiarism: ['t1','t2','t3'],
    }
    return(
        <div className="card-popup-body">
            <p className="sub-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repellat illo ducimus beatae commodi, perspiciatis, repellendus quaerat quae quos atque sapiente id laboriosam totam voluptas soluta! Commodi cum a in.
            </p>
        </div>
    )
}

export default BasicCard;