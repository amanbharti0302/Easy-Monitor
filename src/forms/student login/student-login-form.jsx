import React from 'react';
import { Link } from 'react-router-dom';
import './student-login-form-styles.css';

const StudentLogin =({logintype,handleprofsubmit,handlestudentsubmit,handlechange,email,password})=>{
        return(
            <div className="form">
                <div className="form-header">
                    <h2>{(logintype==='teacher')?`PROFESSOR`:`STUDENT`} LOGIN</h2>
                </div>
                <form onSubmit={(logintype==='teacher')?handleprofsubmit:handlestudentsubmit}>
                    <input id="email"  type="email" name='email' value={email} onChange={handlechange}/>
                    <input id="password"  type="password" name='password' value={password} onChange={handlechange}/>
                    <input type="submit" id="submit" />
                </form>
                <div className="form-footer">
                    <h2>Forgot password?</h2>
                    <Link className="login-home-btn" to="/">Go to Home</Link>
                </div>
            </div>
        )
}

export default StudentLogin;