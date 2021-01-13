import React,{Component} from 'react';

class Option extends Component{
    constructor(props){
        super(props);
        this.state = {
            clicked:false
        }
    }
    handleClick = ()=>{
        this.setState((prevState)=>{
            return({
                clicked:!prevState.clicked
            })
        })
    }
    render(){
        const {value}=this.props;
        let style;
        if(this.state.clicked){
            style={backgroundColor:'purple',color:'white'}
        }
        else{
            style={backgroundColor:'white',color:'black'}
        }
        return(
            <option value={value}  onClick={this.handleClick} style={style}>{value}</option>
        )
    }

}


export default Option;