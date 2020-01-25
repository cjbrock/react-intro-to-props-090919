import React, { Component } from 'react'
import './App.css';

// class NameComponent extends Component {
//     render(){
//       console.log(this.props)
//       return <p>{this.props.name}</p> 
//     }
//   }


  function NameComponent({ name, age }){
    return <li>{name} is {age} years old</li>
  }

export default NameComponent