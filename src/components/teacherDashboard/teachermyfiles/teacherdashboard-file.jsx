import React,{Component} from 'react';
import './teacher-dashboard-file-styles.css';

class DashBoardMyFile extends Component{
    constructor(props){
		console.log(props);
        super(props);
        this.state={
            name:'',
			branch:'',
			coursecode:'',
			assignmentDesc:'',
			enrolledstudent:'',
			assignment:[]
        }
    }
	handleChange = (event)=>{
		const {value,name}=event.target;
		this.setState({
			[name]:value
		})
	}
	handleAdd = ()=>{
		const {name,branch,assignmentDesc,assignment,coursecode} = this.state;
		let newObj = {
			title:name,
			branch:branch,
			coursecode:coursecode,
			description:assignmentDesc
		}
		let newArr = [...assignment,newObj];
		this.setState({
			assignment:newArr
		})
	}
	handleSubmit = (event)=>{
		event.preventDefault();
		console.log(this.state);
		this.setState({
			name:'',
			branch:'',
			coursecode:'',
			assignmentDesc:'',
			assignment:[]
		})
	}
	handleSelect=(event)=>{
		if(event.target.value!=='default'){
		this.setState({
			coursecode:event.target.value
		})}
		else{
			this.setState({
				coursecode:''
			})
		}
	}
    render(){
        const {name,branch,assignmentDesc} = this.state;
        return(
            <div className="teacher-file-body">
				<div className="teacher-form-container">
					<div className="teacher-file-header">
						<h2 className="file-header-text">Assign Work</h2>
					</div>
					<form className="teacher-myfile-form" onSubmit={this.handleSubmit}>
						<label>Name:</label>
						<br/>
						<input type="text" name="name" onChange={this.handleChange} value={name}/>
						<br/>
						<label>Branch:</label>
						<br/>
						<input type="text" name="branch" onChange={this.handleChange} value={branch}/>
						<br/>
						<label>Enter the Assignment Description:</label>
						<br/>
						<textarea name="assignmentDesc" id="assignmentDesc" cols="30" rows="10" onChange={this.handleChange} value={assignmentDesc}></textarea>
						<br/>
						<select className="teacher-file-course" onChange={this.handleSelect}>
							<option className="course-option" value="default">Select an option</option>
							<option className="course-option" value="EC6501">EC6501</option>
							<option className="course-option" value="EC6502">EC6502</option>
							<option className="course-option" value="EC6518">EC6518</option>
							<option className="course-option" value="EC6524">EC6524</option>
						</select>
						<div className="teacher-file-btns">
							<input type="button" value="Add" onClick={this.handleAdd}/>
							<input type="submit" value="Assign"/>
						</div>
					</form>
				</div>
            </div>
		)
    }

}

export default DashBoardMyFile;