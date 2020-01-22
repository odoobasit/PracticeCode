import React, { Component } from 'react';
import ChildComponent from '../Components/ChildComponent';

class ParentComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            ParentName:'pehla'

        }
    }
    badal=(childName)=>{
        alert(`hello ${this.state.ParentName} from ${childName}`)
    }

    render() {
        return (
            <div>
                <ChildComponent handler={this.badal}/>
            </div>
        );
    }
}

export default ParentComponent;