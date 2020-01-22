import React, { Component } from 'react';

class Usermsg extends Component {
    constructor(props){
        super(props)
         this.state={
              mojood:false
         }

    }


check=()=>{
    // alert('dshdueq')
   this.setState({mojood:this.state.mojood ? false : true})

}


    render() {
        let message
        if(this.state.mojood){
            message=<div>Agya bhai apna</div>
        }else{
            message=<div>Mehmaan agae</div>
        }
        return (
            <div>
                <p>{message}</p>

                <button onClick={this.check}>change value</button>
            </div>
          
        );
    }
}

export default Usermsg;