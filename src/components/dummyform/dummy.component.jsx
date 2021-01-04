import React, { Component } from 'react';
import $, { data } from 'jquery';

class Dummy extends Component{
    constructor(){
        super();
        this.state={
            selectfile:""
        }
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
            this.state.selectfile.name 
        );
        
        
        console.log(this.state.selectfile);
        alert(this.state.selectfile);
        
        // $.get('http://localhost:12345/',(data)=>{
        //     console.log(data);
        //     alert(data);
        // })

        $.post('http://localhost:12345/prof/studentreport/',{form,name:"aman",roll:"1804013",email:"amanbharti0302@gmail.com"},(data)=>{
            console.log(data);
            alert(data);
        })
        
    }

render(){
    return(
        <div>
            <form>
                <p>Uplaod your answersheet</p>
                <input type="file" onChange={this.onfilechange}></input>
                <button type="submit" onClick={this.handlesubmit}>Submit here</button>
            </form>
        </div>
    )
}
}


export default Dummy;