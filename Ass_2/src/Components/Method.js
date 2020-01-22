import React ,{Component} from 'react';
class Method extends Component{
    constructor(props){
        super()
        this.state={
            count:0,
        }
    }
    chal=()=>{
        this.setState({
            count:this.state.count+1,
        })
    }
    render(){
        return(
        <div><h1>Increment - {this.state.count}</h1>
            <button onClick={()=>this.chal()}>press</button>
            </div>
        )
    }
// constructor(){
// super()
// this.state={
//     message:"press the button"

// }

// }

// palat=()=>{
//     alert('aaaa');
//     this.setState({message:"thanks for pressing"})
// }
// render(){
//     const item=(this.state);
//     return(
//         <div>
// <h1>{item.message}</h1>
//                 <button onClick={()=>this.palat()}>daba</button>
            
//             </div>
//     )
// }

}
export default Method;

//  class Method extends Component{

//      state={
//          on:false,
//      }
//      toggle=()=>{
//        this.setState({
//            on:!this.state.on
//        });
//      };
//      render(){
//         const list=['oil','ghee','sugar','salt','soap']
       
//      return(
//          <div>
//         <p>khao piyo jan bnao list</p>
//         <ol>
//         {list.map((item)=>{
//         return<li>{item}</li>
//         })}
//         </ol>
//         {this.state.on &&(
//            <h1>Method page</h1>  
//          )} 
          
//         <button onClick={this.toggle}>Click</button>
       
//          </div>
      
//      );
     
       
    
//      }
     
//  }
