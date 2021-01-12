import {Component} from 'react';
import './basic-card-styles.css';

class StudentCard extends Component{
    constructor(){
        super();
        this.state={
            roll: "1804001"
        }
    }
    onChange=(event)=>{
        this.setState({
            roll: event.target.value, //text
            student_data: ""
        });
    }
    onSubmit=()=>{
        //fetch() and receive student data
    }
    render(){
        console.log(this.state);
        return(
            <div className="card-body">
                <div className="card-head-text">
                    <h3>Select Student:</h3>
                    <label>Roll No. </label>
                    <input type="text" onChange={this.onChange} value={this.state.roll}/>
                    <input type="submit" value="submit"/>
                </div>
                <p className="sub-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repellat illo ducimus beatae commodi, perspiciatis, repellendus quaerat quae quos atque sapiente id laboriosam totam voluptas soluta! Commodi cum a in.
                </p>
            </div>
        );
    }
}

export default StudentCard;