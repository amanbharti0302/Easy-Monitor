import React,{Component} from 'react';
import './student-login-form-styles.css';

class StudentLogin extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }

    render(){
        return(
            <div className="form">
                <div className="form-header">
                    <h2>LOGIN</h2>
                </div>
                <form >
                    <input type="email" name="email"/>
                    <input type="password" name="passowrd"/>
                    <input type="submit" id="submit"/>
                </form>
                <div className="form-footer">
                    <h2>Forgot password?</h2>
                </div>
            </div>
        )
    }

}

export default StudentLogin;