import './myfiles.css';
import {Component} from 'react';

class MyFiles extends Component{
	constructor(){
		super();
		this.state={

		}
	}

render({subjects,student}){
	return(
		<div>
			<form>
                <p>Uplaod your answersheet</p>
                <input type="file" onChange={this.onfilechange}></input>
                <button type="submit" onClick={this.handlesubmit}>Submit here</button>
            </form>
		</div>
	)}
}

export default MyFiles;