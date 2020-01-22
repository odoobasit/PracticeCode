import React ,{Component} from 'react';
class Another extends Component{
    state={
        on:false,
    }
    change=()=>{
        this.setState({
            on:!this.state.on,
        });
    }
    render(){
        return(<div>
            {this.state.on &&(
           <h1>Another page</h1>  
         )} 
          
        <button onClick={this.change}>Click</button>
        </div>)
    }
}
export default Another;