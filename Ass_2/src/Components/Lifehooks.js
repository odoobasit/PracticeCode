import React, { Component } from 'react';
import Life from './Life'
import Form from './Form'

class Lifehooks extends Component {
    constructor(props) {
        super(props);
     this.state={
        name:''
     }
    }

    componentWillMount() {
        console.log("component will unmount");

    }

    componentDidMount() {
        console.log("component did mount");

    }

    componentWillReceiveProps(nextProps) {
        console.log("component will receive props");
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("should component update");
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log("component will update");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentdid update");
    }

    componentWillUnmount() {
        console.log("component will unmount");
    }
static getDerivedStateFromProps(props,state){
console.log('props',props)
console.log('state',state)
}

    render() {
        const {name} = this.state;
        return (
            <div>
             <p>Life Cycle</p>
            {name == 'talha' ? <Life/>: <Form/> }
            
             <button onClick={()=>{this.setState({name:'khalid'})}}>hedfuihewqu</button>
            </div>
        );
    }
}


export default Lifehooks;