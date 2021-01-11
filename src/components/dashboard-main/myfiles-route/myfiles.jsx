import './myfiles.css';
import { Component } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";
import Uploadedtab from '../../../components/uploaded-document/uploaded-document';
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

	componentDidMount() {
		this.setState({ filename: '*Please upload your answer sheet above' });
		this.setState({ overlay: 'myfiles' });
	}

	onfilechange = e => {
		this.setState({ selectfile: e.target.files[0] });
		this.setState({ filename: e.target.files[0].name });
	}

	handlesubmit = async (e) => {
		e.preventDefault();
		if (this.state.selectfile) {
			document.getElementById('file-info').style.color = 'black';		//
			document.getElementById('upload-sub').disabled = true;			//dekho yahan ye sab upar se lagane k liye h
			document.getElementById('file').disabled = true;				//ye sab javascript se kiye hn 
			document.getElementById('upload-sub').style.opacity = 0.5;		//in sabko normal karna hoga
			document.getElementById('upload-loader').style.opacity = 1;
			this.setState({ overlay: 'myfiles myfiles-overlay' });
			this.setState({ message: 'It will take a few minute to process your answersheet' });

			const form = new FormData();
			form.append(
				"myFile",
				this.state.selectfile
			)

			form.append("name", "sakshi");

			await $.ajax({
				type: "POST",
				url: "http://localhost:12345/student/myfiles",
				data: form,
				processData: false,
				contentType: false
			}).done(function (data) {

				console.log(data);
				//ab try kro
				if (data.status == 'success') {
					//iska matlab h ki backend mein koi error nhi hua
					////agar succes hua to file suucssfully submitted ka dikha do
					alert("File Uploaded Successfully");
					//console.log(data.message);
				}
				else {
					console.log(data.message);


				}

				document.getElementById('upload-sub').disabled = false;
				document.getElementById('file').disabled = false;
				document.getElementById('upload-..0sub').style.opacity = 1;		//dekho js se humlog wahan dhundhla kiye the form ko usi ko wapas normal kiye
				document.getElementById('upload-loader').style.opacity = 0;		//js se css property ko change kiye aur loader ko invisible bnaye
			});

			this.setState({ overlay: 'myfiles' });							//js se kuch class hatye div se
			this.setState({ message: '' });									//js se message
			this.setState({ filename: '' });								//jaise hi sab kuch ho gya ab sab norma ho gy

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
							<p className="upload-p">Upload your answersheet</p>
							<h4>Due time: 5:00 PM</h4>
							<input type="file" id="file" onChange={this.onfilechange} className="upload-input"></input>
							<button type="submit" id="upload-sub" onClick={this.handlesubmit} className="upload-input-btn">Submit here</button>
							<p id="file-info">{this.state.filename}</p>
						</form>
					</div>
				</div>

				<div className="divider"></div>
				<Uploadedtab />
				<Uploadedtab />
				<Uploadedtab />
				<Uploadedtab />
				<Uploadedtab />
				<Uploadedtab />
				<Uploadedtab />
				<Uploadedtab />
				<div className="footer-space"></div>
			</div>
		)
	}
}

export default MyFiles;