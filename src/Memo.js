import React, { Component } from 'react'
import './Memo.css';
import Itemslist from './Itemslist';

export default class Memo extends Component {
  constructor(props){
    super(props)
    this.state ={text: '',  items:[]}
  }

  
  handleChange= (event)=>{
    console.log(event.target.value)
    this.setState({text: event.target.value})
  }

  handleSubmit= (event) =>{ 
    // to stop reload
event.preventDefault();
const newItem={
  id:Date.now(),
  text:this.state.text
}
this.setState(
  state => ({
    items:state.items.concat(newItem),
    text:''
  })
)
  }

  render() {
    return (
      <div>

         <Itemslist items={this.state.items} />

        <h3>what's your plan for today ? !</h3>
        
        <form onSubmit={this.handleSubmit}>

          <input type="text" id="listItem" onChange={this.handleChange} value={this.state.text}></input>

          <button>Add # {this.state.items.length+1}</button>

        </form>
      </div>
    )
  }
}
