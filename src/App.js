import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import MultipleForm from './MultipleForm';


class App extends Component{
  render(){
    return(
      <div className="App">
        <Form/>
        <MultipleForm/>
      </div>
    )
  }
}

export default App;