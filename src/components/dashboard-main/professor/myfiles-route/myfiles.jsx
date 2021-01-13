import React,{Component} from 'react';
import Option from './option-component/option';
import './myfiles.css';

class MyFiles extends Component{
	constructor(){
		super();
		this.state={
			name:'',
			branch:'',
			coursecode:'',
			enrolledstudent:[],
			assignement:[],
		}
	}
	handleChange = (event)=>{
		const {value,name}=event.target;
		this.setState({
			[name]:value
		})
	}
	handleStudentSelect = (e)=>{
		let arr = [];
		let arr1;
		const index = arr.indexOf(e.target.value);
		if(index>-1){
			arr=arr.splice(index,1);
		}
		else{
			arr.push(e.target.value);
			this.setState({
				enrolledstudent:arr
			})
		}
		console.log(arr);
	}
	render(){

		return(
			<div className="my-files">
				<form className="assign">
					<input type="text" placeholder="Enter Your Full Name" name="name" onChange={this.handleChange}/><br/>
					<input type="text" placeholder="Enter Name of the subject" name="branch" onChange={this.handleChange}/><br/>
					<input type="text" placeholder="Enter Course Code" name="cc" onChange={this.handleChange}/><br/>
					<select name="students" id="students">
						<option>Select Options</option>
						<Option value="Krishnam" onClick={this.handleStudentSelect} />
						<Option value="Aman" onClick={this.handleStudentSelect} />
						<Option value="Apurva" onClick={this.handleStudentSelect} />
						<Option value="Sakshi" onClick={this.handleStudentSelect} />
					</select>
					<br />
					<select name="assignements" id="assignements">
						<option>Select Options</option>
						<option value="Krishnam" onClick={this.handleAssignementSelect}>as01</option>
						<option value="Aman" onClick={this.handleAssignementSelect}>as02</option>
						<option value="Apurva" onClick={this.handleAssignementSelect}>as03</option>
						<option value="Sakshi" onClick={this.handleAssignementSelect}>as04</option>
					</select>
					<br/>
					<input type="submit" name="submit"/>
				</form>
			</div>
		)
	}
}
export default MyFiles;