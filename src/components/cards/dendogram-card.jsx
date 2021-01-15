import {Component} from 'react';
import DendoPopupCard from './dendogram-card-popup.jsx';

class DendoCard extends Component{
    constructor(){
        super();
        this.state={
            roll: "1804001",
            popup: false
        }
    }
    onChange=(event)=>{
        this.setState({
            roll: event.target.value, //text
            student_data: ""
        });
    }
    onSubmit=()=>{
        //fetch() and receive student data via student roll and course name/code
        //console.log(this.state.roll);
        this.togglePopup();
    }
    togglePopup=()=>{
        this.setState({
            popup: !this.state.popup
        })
    }
    render(){
        return(
            <div className="card-body">
                <div className="card-head-text">
                    <h2>Forging Clustering (detecting most probable grouping within)</h2>
                </div>
                <div className="sub-body">
                    <p className="sub-text">
                        Currently 5 students have submitted out of 5.
                    </p>
                    <input className="submit-btn" type="submit" onClick={this.onSubmit} value="get clusters !"/>
                </div>
                {
                    this.state.popup?
                    <DendoPopupCard togglePopup={this.togglePopup}/>:<div></div>
                }
            </div>
        );
    }
}

export default DendoCard;