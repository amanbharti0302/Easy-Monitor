import './myfiles.css';
import {Component} from 'react';

class MyFiles extends Component{
	constructor(props){
		super(props);
		this.state={
			selectfile:"",
			subjects:this.props.subjects,
			student:this.props.student
		}
	}

onfilechange = e =>{
    this.setState({selectfile:e.target.files[0]});
    console.log(this.state.selectfile)
}

handlesubmit= e =>{
    e.preventDefault();
    const form = new FormData();
    form.append( 
        "myFile", 
        this.state.selectfile, 
		this.state.selectfile.name)
	console.log(this.state.students);
}
        

render(){
	this.setState({student:this.props.student});
	this.setState({subjects:this.props.subjects});
	//console.log(this.props);
	return(
		<div className="myfiles">
			<form>
                <p>Uplaod your answersheet</p>
                <input type="file" onChange={this.onfilechange}></input>
                <button type="submit" onClick={this.handlesubmit}>Submit here</button>
            </form>
		</div>
	)}
}

export default MyFiles;