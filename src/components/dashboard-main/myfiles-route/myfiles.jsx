import './myfiles.css';
import {Component} from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";
import Uploadedtab from '../../../components/uploaded-document/uploaded-document';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: purple;
`;

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
				<form className="upload-form">
                	<p className="upload-p">Upload your answersheet</p>
                	<input type="file" onChange={this.onfilechange} className="upload-input"></input>
					<button type="submit" onClick={this.handlesubmit} className="upload-input-btn">Submit here</button>
					<ClipLoader color="#000000" loading="true" css={override} size={150} />
            	</form>
			</div>

			<div className="divider"></div>
			<Uploadedtab/>
			<Uploadedtab/>
			<Uploadedtab/>
			<Uploadedtab/>
			<Uploadedtab/>
			<Uploadedtab/>
			<Uploadedtab/>
			<Uploadedtab/>
		</div>
	)}
}

export default MyFiles;