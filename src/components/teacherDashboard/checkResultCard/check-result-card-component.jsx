import React from 'react';
import {Link} from 'react-router-dom';
import './check-result-card-styles.css';

const CheckResultCard = ()=>{
    return(
        <div className="check-work-result">
            <p className="result-text">There was a match found among the works of :</p>
            <ul className="result-list">
                <li className="result-list-items">Krishnam</li>
                <li className="result-list-items">Aman</li>
                <li className="result-list-items">Apurva</li>
            </ul>
            <Link to="/login-teacher/explore" style={{textDecoration:'none'}}><p className="more-info-result-link">More info</p></Link>
        </div>
    )
}


export default CheckResultCard;