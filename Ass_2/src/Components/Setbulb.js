import React, { Component } from 'react';

class Setbulb extends Component {
    constructor(props){
        super(props)
        this.state=({
            image1:''
        })
    }
    laptop=()=>{
        this.setState({
            image1: 'https://www.industrytap.com/wp-content/uploads/2016/02/incandescent-e1456179151174.jpg'
        })
    }
      
    page=()=>{
        this.setState({
            image1: 'https://media.istockphoto.com/vectors/brokendown-light-bulb-vector-id164446736'
           
        })
    }
      
  
    render() {
        return (
            <div>
                <button onClick={this.page}>Broken Bulb</button>
                <button onClick={this.laptop}>Set bulb</button>
                <img src={this.state.image1 }/>
        
        


            </div>
        );
    }
}

export default Setbulb;