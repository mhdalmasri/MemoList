import React, { Component } from 'react'
import './list.css'

export default class Itemslist extends Component {
  render() {
    return (
      <div>
     <ol>
         {this.props.items.map(item=>(<li>{item.text}</li>))}
     </ol>
        
      </div>
    )
  }
}
