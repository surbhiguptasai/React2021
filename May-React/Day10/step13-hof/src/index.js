import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PowerMove from './components/powerMove';
import PowerClick from './components/powerClick'
class MainApp extends Component{
  render(){
    return<div>
      <h1>Main App Component</h1>
    <PowerClick/>
    <PowerMove/>
    </div>
  }
}

ReactDOM.render(<MainApp/>,document.getElementById('root'));