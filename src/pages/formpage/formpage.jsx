import React, { Component } from 'react';
import $ from 'jquery';
import StudentLogin from '../../forms/student login/student-login-form';
import './formpage-styles.css';

import App from '../Dashboard/dashboard';

class FormPage extends Component{
    constructor(props){
        //console.log(props);
        super(props);
        this.state={
          email:'',
          password:'',
          type:'',
          user:''
        }
    }

    
    componentDidMount(){
        const token = localStorage.getItem('token');
        const type = localStorage.getItem('type');

        if(!token){
            this.setState({user:''});
            this.setState({type:''});
        }

        this.setState({type:type});
        if(type==='teacher'){
            $.post('https://hacknitpback.herokuapp.com/prof/getteacher',{token:token},(data)=>{
                if(data.status==="success"){
                    this.setState({user:data.message});
                    this.setState({type:'teacher'});
                }
                else{
                    localStorage.removeItem('token','');
                    localStorage.removeItem('type','');
                }
            })
        }
        else{            
            $.post('https://hacknitpback.herokuapp.com/student/getstudent',{token:token},(data)=>{
                if(data.status==="success"){
                    this.setState({user:data.message});
                    this.setState({type:'student'});
                }
                else{
                    localStorage.removeItem('token','');
                    localStorage.removeItem('type','');
                }
            })
        }
    }
    
    setuser(type,user){
        this.setState({type:type});
        this.setState({user:user});
    }

    handlechange = e=>{
        const {value,name} = e.target;
        this.setState({[name]: value})
    }
    
    handlestudentsubmit=async(e)=>{
        try{
            const email =await this.state.email;
            const password =await this.state.password;
            if(!email||!password)alert('please enter email and password both');
            else{
                    $.post('https://hacknitpback.herokuapp.com/student/login',{email:email,password:password},async(data)=>{
                    if(data.status==="success"){
                        await alert('Logged in successfully');
                        await localStorage.setItem('token',data.token);
                        await localStorage.setItem('type','student');
                        this.setuser('student',data.professor);
                        this.setState({email:'',password:''});
                    }
                    else{alert('Enter correct email or password');}
                })
            }
            e.preventDefault();
        }
        catch(err){
            alert('unsuccess');
        }
    }

    handleprofsubmit=async(e)=>{
        try{
            const email =await this.state.email;
            const password =await this.state.password;
            if(!email||!password)alert('please enter email and password both');
            else{

                $.post('https://hacknitpback.herokuapp.com/prof/login',{email:email,password:password},async(data)=>{
                    if(data.status==="success"){
                        await alert('Logged in successfully');
                        await localStorage.setItem('token',data.token);
                        await localStorage.setItem('type','teacher');
                        this.setuser('teacher',data.professor);
                        this.setState({email:'',password:''});
                    }
                    else{alert('Enter correct email or password');}
                })
            }
            e.preventDefault();
        }
        catch(err){
            alert('unsuccess');
        }
    }

    render(){
        return(
            <div>
            {
                this.state.user===''?
                <div className="form-page">
                    <StudentLogin setuser={this.setuser} logintype={this.props.logintype} handleprofsubmit={this.handleprofsubmit} handlestudentsubmit={this.handlestudentsubmit} handlechange={this.handlechange} email={this.state.email} password={this.state.password}/>            
                </div>
                : (this.state.type==='teacher')?
                <App type={this.state.type} user={this.state.user}/>
                :<App type={this.state.type} user={this.state.user}/>
            }
            </div>
        )
    }
}

export default FormPage;