import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class FirstComp extends Component{
 
  state={power:0,apptitle:'default title'}

  increasePower = () =>{
   this.setState(function(prevState,compProps){
     //console.log(arguments[0].arguments[1])
     return{
    // power:10
     power: prevState.power += 1,
     apptitle:compProps.title
     }
   },function(){
    console.log("power is:",this.state.power)
   })
   
  }
  decreasePower= () =>{
    this.setState({
      //power:0
      power: this.state.power -= 1
    })
    console.log("power is:",this.state.power)
  }
  render(){
    return<div>
            <h1>First Component</h1>
            <hr/>
            <h2>Power value is:{this.state.power}</h2>
            {/* <button onClick={this.increasePower.bind(this) }>Increase Power</button>
            <button onClick={this.decreasePower.bind(this) }>Decrease Power</button> */}
            
            <button onClick={this.increasePower }>Increase Power</button>
            <br/>
            <button onClick={this.decreasePower }>Decrease Power</button>
            
          </div>
    }
}
ReactDOM.render(<FirstComp/>,document.getElementById('root'));