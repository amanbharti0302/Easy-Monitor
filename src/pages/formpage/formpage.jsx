import React from 'react';
import StudentLogin from '../../forms/student login/student-login-form';
import './formpage-styles.css';

const FormPage=({setuser,logintype})=>{
    return(
        <div className="form-page">
            <StudentLogin setuser={setuser} logintype={logintype}/>
        </div>
    )
}

export default FormPage;