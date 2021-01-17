import React,{Component} from 'react';
import './teacher-dashboard-check-styles.css';

class DashBoardCheck extends Component{
    constructor(props){
        super(props);
        this.state={
            show: false,
            course_assign_student: []
        }
        let course_assign_student=[];
        for(let i=0;i<this.props.user.course.length;i++){
            fetch('https://hacknitpback.herokuapp.com/text/all-assignments',{
                method: 'post',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({
                    coursecode: this.props.user.course[i].coursecode
                })
            })
            .then(res=>res.json())
            .then(assignments=>{
                course_assign_student.push({
                    name: this.props.user.course[i].name,
                    coursecode: this.props.user.course[i].coursecode,
                    assignments: assignments
                });
                this.setState({
                    course_assign_student: course_assign_student
                });
            })
            .catch(err=>alert(err));
        }

    }
    
    
    render(){
        console.log(this.state);
        return(
            <div className="teacher-check-body">
                <div className="teacher-check-title">
                    <h2 className="teacher-check-title-text">
                        Check
                    </h2>
                </div>
                <div className="table">
                    <table>
                        <tr>
                            <th className="first-head">Sno.</th>
                            <th className="second-head">Course Code</th>
                            <th classaName="third-head">Assignement</th>
                            <th className="fourth-head">No. of Submissions</th>
                            <th className="fifth-head">Check</th>
                        </tr>
                        <tr>
                            <td className="first">1</td>
                            <td className="second">EC6501</td>
                            <td className="third">
                                <select name="" id="">
                                    <option value="">Select</option>
                                    <option value="As 01">As 01</option>
                                    <option value="As 02">As 02</option>
                                </select>
                            </td>
                            <td className="fourth">3</td>
                            <td className="fifth">
                                <button className="check" onClick={this.handleClick}>Check</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="first">2</td>
                            <td className="second">EC6502</td>
                            <td classNamee="third">
                                <select name="" id="">
                                    <option value="default">Select</option>
                                    <option value="As 01">As 01</option>
                                    <option value="As 02">As 02</option>
                                </select>
                            </td>
                            <td className="fourth">4</td>
                            <td className="fifth">
                                <button className="check" onClick={this.handleClick}>Check</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="first">3</td>
                            <td className="second">EC6523</td>
                            <td className="third">
                                <select name="" id="">
                                    <option value="default">Select</option>
                                    <option value="As 01">As 01</option>
                                    <option value="As 02">As 02</option>
                                </select>
                            </td>
                            <td className="fourth">6</td>
                            <td className="fifth">
                                <button className="check" onClick={this.handleClick}>Check</button>
                            </td>
                        </tr>
                    </table>
                </div>
                
            </div>
        )
    }
}

export default DashBoardCheck;