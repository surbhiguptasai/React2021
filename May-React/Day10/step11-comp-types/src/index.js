import React, { Component } from 'react'; 
import ReactDOM from 'react-dom'; 
import ChildComp from './component/childclass.component'
import  FunComp from './component/funchild.component'
import PureComp from './component/pureclass.component'
import FunMemoComp from './component/funmemo.component'

class MainApp extends Component{ 
state = { 
power :0 
} 

increasePower = ()=>{ 
this.setState({ 
power : 5 
}) 
} 

render(){ 
  console.log("MainApp's render was called")
        return <div> 
        <h1>Power in Parent Component : { this.state.power } </h1> 
        <hr/>
        <button onClick={ this.increasePower }>Increase Power</button> 
        <ChildComp pow={this.state.power}></ChildComp>
        <FunComp pow={this.state.power}></FunComp>
        <PureComp pow={this.state.power}></PureComp>
        <FunMemoComp pow={this.state.power}></FunMemoComp>
        </div> 
} 
} 

ReactDOM.render(<MainApp/>, document.getElementById('root'));