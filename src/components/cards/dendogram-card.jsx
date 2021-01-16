import {Component} from 'react';
import DendoPopupCard from './dendogram-card-popup.jsx';

let src="#";
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
        
        fetch('https://hacknitpback.herokuapp.com/python/clustering',{
          method: 'post',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify(
            [
                {
                    id: 0,
                    text: "hey there"
                },
                {
                    id: 1,
                    text: "hey there"
                },
                {
                    id: 2,
                    "text": "see you there"
                }
            ]
          )
        })
        .then(response=>response.json())
        .then(response=>{
            fetch('http://localhost:12345/python/dendrogram')
            .then(res=>res.json())
            .then(res=>{
                src=`data:image/png;base64,${res}`;
                this.togglePopup();
            })
        })
        .catch(err=>console.log(err))
        
        //fetch() and receive student data via student roll and course name/code
        //console.log(this.state.roll);
        
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
                    <input className="submit-btn" type="submit" onClick={()=>this.onSubmit()} value="get clusters !"/>
                </div>
                {
                    this.state.popup?
                    <DendoPopupCard togglePopup={this.togglePopup} src={src}/>:<div></div>
                }
            </div>
        );
    }
}

export default DendoCard;