import React,{Component} from 'react';
import CheckResultCard from '../checkResultCard/check-result-card-component';
import './teacher-dashboard-check-styles.css';

class DashBoardCheck extends Component{
    constructor(props){
        super(props);
        this.state={
            show:false
        }
    }
    handleClick = ()=>{
        this.setState((prevState)=>{
            return(
                {show:!prevState.show}
            )
        })
    }
    render(){
        let {show} = this.state;
        let className='show',text='hide';
        if(show===false){
            text='Show';
            className = 'hide';
        }
        return(
            <div className="teacher-check-body">
                <div className="teacher-check-title">
                    <h2 className="teacher-check-title-text">
                        Check
                    </h2>
                </div>
                <div className="check-work-block">
                    <div className="check-work-card">
                        <p className="check-work-text">Check the assigned work for copying?</p>
                        <button className="check-btn" onClick={this.handleClick}>{text}</button>
                    </div>
                    <div className={`check-work-result-block ${className}`}>
                        <h2 className="check-work-result-head">Results</h2>
                        <CheckResultCard />
                        <CheckResultCard />
                        <CheckResultCard />
                        <CheckResultCard />
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default DashBoardCheck;