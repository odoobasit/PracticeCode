import React, { Component } from 'react';


class Life extends Component {
    constructor(props) {
        super(props);
     console.log("constructor");
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

    shouldComponentUpdate(nextProps, nextState) {
        console.log("should component update");
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("component will update");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentdid update");
    }

    componentWillUnmount() {
        console.log("component will unmount");
    }

    render() {
        console.log(this.props.name,'props****************')
        return (
          
            <div>
             <p>Life Cycle loops</p>
            </div>
        );
    }
}


export default Life;