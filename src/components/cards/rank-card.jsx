const BasicCard=({rank})=>{
    return(
        <div className="card-body">
            <div className="card-head-text">
                <h2>Class Standing (ranking in the class in the selected course)</h2>
            </div>
            <p className="sub-text">
                Congratulation, your standing is <strong style={{fontSize: "27px",color:"purple",padding: "0px 5px"}}>{rank}</strong>
            </p>
        </div>
    )
}

export default BasicCard;