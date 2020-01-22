import React, { Component } from 'react';
// import {Helmet} from 'react-helmet';

class Afterlogin extends Component {
    constructor(props){
        super(props);
this.state={
Mydata : ["FirstName","LastName","Email","Salary","Job Start Date","vgfhf"],
empName:''
}        
    }


    addData(){
    const {empName , Mydata } = this.state;
    this.setState({empName:''})
    if(Mydata.push(empName)){
    this.setState({empName:''})
}
}
        remove=()=>{
        const {Mydata}=this.state;
        Mydata.shift();
         this.setState({
              empName:""
          }) 
          }

          update=(e)=>{
           const {Mydata}=this.state;
           Mydata;
          this.setState({empName: e.target.value})
          
             }

           render() {
           console.log(Mydata,'empname123348')
           const {Mydata}=this.state;
           return (
            <div style={{backgroundColor:'skyblue'}} >
            <input value={this.state.empName} onChange={(e)=>{ this.setState({empName: e.target.value})} } type='text'/>
                <button onClick={this.addData.bind(this)} >submit</button>
                <button onClick={this.remove}>Delete</button>
                <div align="center"><table border="1">
                <tr> 
                  {Mydata.map((i)=>{
                  return <td value={this.state.tdata} onClick={this.update}>{i}  <button onClick={this.update}>Update</button></td>
                  
                })}
                </tr>
                </table></div> 
           

                     
                  
              
               </div>
              
             
        );
    }
}

export default Afterlogin;