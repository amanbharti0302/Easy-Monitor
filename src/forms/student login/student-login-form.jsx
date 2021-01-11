import React,{Component} from 'react';
import $ from 'jquery';
import './student-login-form-styles.css';

class StudentLogin extends Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }
    }

    handlechange = e=>{
        const {value,name} = e.target;
        this.setState({[name]: value})
    }

    handlestudentsubmit=async(e)=>{
        const email =await this.state.email;
        const password =await this.state.password;
        if(!email||!password)alert('please enter email and password both');
        else{
            await $.post('http://localhost:12345/student/login',{email:email,password:password},(data)=>{
                console.log(data);
            })
        }
        e.preventDefault();
    }

    handleprofsubmit=async(e)=>{
        alert('professror');
        const email =await this.state.email;
        const password =await this.state.password;
        if(!email||!password)alert('please enter email and password both');
        else{
            alert(email);
            alert(password);
            $.post('http://localhost:12345/prof/login',{email:email,password:password},async(data)=>{
                await console.log(data);
                await alert(data.status);
            })
        }
        e.preventDefault();
    }

    render(){
        const logintype = this.props.logintype;
        return(
            <div className="form">
                <div className="form-header">
                    <h2>LOGIN</h2>
                </div>
                <form onSubmit={(logintype=='teacher')?this.handleprofsubmit:this.handlestudentsubmit}>
                    <input id="email"  type="email" name='email' value={this.state.email} onChange={this.handlechange}/>
                    <input id="password"  type="password" name='password' value={this.state.password} onChange={this.handlechange}/>
                    <input type="submit" id="submit" />
                </form>
                <div className="form-footer">
                    <h2>Forgot password?</h2>
                </div>
            </div>
        )
    }

}

export default StudentLogin;