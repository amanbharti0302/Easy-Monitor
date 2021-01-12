import './myfiles.css';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";
import Uploadedtab from '../../../uploaded-document/uploaded-document';
import $, { data } from 'jquery';


const override = css`
  top:200px;
  position:relative;
  display: block;
  margin: 0 auto;
  border-color: purple;
`;

class MyFiles extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectfile: "",
			filename: "Please upload your answer sheet above",
			message: "",
			overlay: ""
		}
	}

	async componentDidUpdate() {
		const subject =await this.props.currsubject[0];
		const user = await this.props.user.detail;
		const rollno = user.rollno;
		var allassignment=[];
		
		if (this.props.currsubject.length==1)
			{
				await $.post("https://hacknitpback.herokuapp.com/student/assignment", { "ass": subject }, async(res) => {
				if (res.status === "success") {
					const assignments = res.message;
					allassignment =await assignments.map((el) => {return el;})
				}
				else {alert('Invalid request');}
			})
		}


		var todo =allassignment.map((el)=>{
			var find=false;
			find=el.student.map((el2)=>{if(el2.rollno===rollno)return true;})
			if(find==false)return el;
		})
		todo=todo.filter(el=>el!=undefined);

		if(todo.length!=0){
			document.getElementById('assignmentname').innerHTML=todo[0].Name;
			document.getElementById('description').innerHTML=todo[0].description;
			document.getElementById('upload-sub').disabled = false;
			document.getElementById('file').disabled = false;
		}
		else{
			document.getElementById('assignmentname').innerHTML='No new works assigned';
			document.getElementById('description').innerHTML='Currently no assignmet';
			document.getElementById('upload-sub').disabled = true;
			document.getElementById('file').disabled = true;
		}		

		var done=allassignment.filter(find=>find.length>0).map((el)=>{
			var find=el.student.map((el2)=>{
				if(el2.rollno===rollno)return el2;
			})
		})
		done = done.filter(el=>el!=undefined);
		//console.log('done',done);
		//////////////////////////////////////////////////replace allsignment with done
		ReactDOM.render(allassignment.map((el)=>{return <Uploadedtab key={el.Name} data={el}/>}),document.getElementById('uploaded'))
	}

	async componentDidMount() {
		this.setState({ filename: '' });
		this.setState({ overlay: 'myfiles' });
		document.getElementById('upload-sub').disabled = true;
		document.getElementById('file').disabled = true;
	}

	onfilechange = e => {
		this.setState({ selectfile: e.target.files[0] });
		this.setState({ filename: e.target.files[0].name });
	}

	handlesubmit = async (e) => {
		e.preventDefault();
		if (this.state.selectfile) {
			document.getElementById('file-info').style.color = 'black';
			document.getElementById('upload-sub').disabled = true;
			document.getElementById('file').disabled = true;
			document.getElementById('upload-sub').style.opacity = 0.5;
			document.getElementById('upload-loader').style.opacity = 1;
			this.setState({ overlay: 'myfiles myfiles-overlay' });
			this.setState({ message: 'It will take a few minute to process your answersheet' });

			const form = new FormData();
			form.append(
				"myFile",
				this.state.selectfile
			)
			form.append("name", "sakshi");

			// await $.ajax({
			// 	type: "POST",
			// 	url: "http://localhost:12345/student/myfiles",
			// 	data: form,
			// 	processData: false,
			// 	contentType: false
			// }).done(function (data) {

			// 	console.log(data);
			// 	if (data.status === 'success') {alert("File Uploaded Successfully");}
			// 	else {console.log(data.message);}
				document.getElementById('upload-sub').disabled = false;
				document.getElementById('file').disabled = false;
				document.getElementById('upload-sub').style.opacity = 1;
				document.getElementById('upload-loader').style.opacity = 0;
			// });
			alert('aman is currently working on this part so stopped this submission code');

			this.setState({ overlay: 'myfiles' });
			this.setState({ message: '' });
			this.setState({ filename: '' });
				
		}
		else {
			alert('select answersheet first');
			document.getElementById('file-info').style.color = 'red';
		}
	}


	render() {
		return (
			<div>
				<div className="upload-container">

					<div id="upload-loader" className="upload-loader">
						<ClipLoader color="#000000" loading="true" css={override} size={50} />
						<h4 className="message">{this.state.message}</h4>
					</div>

					<div id="myfiles" className={`${this.state.overlay}`} >
						<form className="upload-form">
							<p className="upload-p" id="assignmentname">No new works assigned</p>
							<h4 id="description">Currently no assignmet</h4>
							<input type="file" id="file" onChange={this.onfilechange} className="upload-input"></input>
							<button type="submit" id="upload-sub" onClick={this.handlesubmit} className="upload-input-btn">Submit here</button>
							<p id="file-info">{this.state.filename}</p>
						</form>
					</div>
				</div>

				<div className="divider"></div>
				<div id="uploaded">
				</div>
				<div className="footer-space"></div>
			</div>
		)
	}
}

export default MyFiles;