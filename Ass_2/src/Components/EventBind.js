import React, { Component } from 'react';

class EventBind extends Component {
    constructor(props){
        super(props)
        this.state={
            message:"hello"
        }
        
    }
    ClickHandler=()=>{
        this.setState({message:"goodbye"})
    }
    // ClickHandler=()=>{
    //     // this.setState({message:"good bye"},()=>{
    //     // 
    //     // })
    //     this.setState({message: "gasdfyaywjdffgawyg"},()=>{
    //         console.log(this.state.message)
    //     })
    //  }

    render() {
        return (
            <div>
            <h1>{this.state.message}</h1>
                <button onClick={this.ClickHandler}>press</button>
            </div>
        );
    }
}

export default EventBind;