import './myfiles.css';
import {Component} from 'react';

class MyFiles extends Component{
	constructor(props){
		super(props);
		this.state={
			selectfile:""
		}
	}

componentDidMount(){
	this.setState({student:this.props.student});
	this.setState({subjects:this.props.subjects});
}

componentDidUpdate(){
	console.log(this.props);
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
}
        

render(){
	//const subjects = this.props.subjects;
	//const student = this.props.student;
	//console.log(subjects);
	
	return(
		<div>
		<div className="myfiles">
			<form>
                <p>Upload your answersheet</p>
                <input type="file" onChange={this.onfilechange}></input>
                <button type="submit" onClick={this.handlesubmit}>Submit here</button>
            </form>
		</div>
			
		</div>
	)}
}

export default MyFiles;