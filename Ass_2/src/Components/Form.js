import React, { Component } from 'react';


class Form extends Component {
    constructor(props){
        super(props)
        this.state={
            username: '',
            comments:'',
            Topic:'React'}
    }
    handleUsernameChange=(event)=>{
        this.setState({
            username:event.target.value

        },()=>{this.setState({para:this.state.username})})
    }
    handleCommentsChange = event =>{
      this.setState  ({
          comments:event.target.value
      })   
    }
    handleTopicChange = event =>{
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit = event =>{
        alert(`${this.state.username}
         ${this.state.comments} 
         ${this.state.Topic}`)
         event.preventDefault()
    }

    render() {
        return (<form onSubmit={this.handleSubmit}>
            <div>
               <label>Username</label>
               <input type='text'
                
                onChange={this.handleUsernameChange}
                />
    <p>{this.state.para}</p>
            </div>
            <div><label>Comments</label>
        <textarea 
         onChange={this.handleCommentsChange}>
        </textarea></div>
        <div><label>Topic</label>
        <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="Ionic">Ionic</option>
            <option value="Vue">Vue</option>
            </select></div>
            <button type="submit">Submit</button>
        </form>
            
        );
    }
    
}

export default Form;
