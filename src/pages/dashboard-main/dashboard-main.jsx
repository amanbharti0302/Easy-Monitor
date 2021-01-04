import React from 'react';
import './dashboard-main-styles.css';

import Dummy from '../../components/dummyform/dummy.component';

const DashBoard = ()=>{
    return(
        <div className="main-body">
            <div className="title">
                <h2 className="title-text">Dashboard</h2>
                <Dummy/>
            </div>
            
        </div>
    )
}

export default DashBoard;