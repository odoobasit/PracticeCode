import React, { Component } from 'react';
import Afterlogin from './Afterlogin';

class Login extends Component {
    constructor(props){
        super(props);
        this.state=({username:'',
        password:'',
        login:false
    
    })

    }
    
    check=()=>{
    const {username} = this.state;
{username === 'admin' ?  this.setState({login : true}) : this.setState({login : false},()=>{alert('wrong user')}) }
     
    console.log("chal ra he bhai");
    



    }
    
    render() {
        const {login} = this.state;
        return (
            <div>
               {login == false && <div> <label> Username  </label>
               <input  onChange ={(e)=>{  this.setState({username : e.target.value})   }} placeholder= "enter" type='text'/>
               <br/><br/>
               <label> Password   </label>
               <input onChange ={(e)=>{console.log(e.target.value)}} placeholder= "enter" type='text'/>
               <br/><br/>
               <button onClick={this.check}>Submit</button></div>}
              

              {login == true && <Afterlogin/>} 
               
            </div>
        );
    }
}

export default Login;