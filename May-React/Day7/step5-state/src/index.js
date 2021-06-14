import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom';

// let justiceLeague = ['Batman','Superman','Aquaman','Flash','Wonder Women','Cyborg','Green Lantern','Namor']
// let avengers=['Ironman','Thor','Hulk','Vision','Black Widow','Spiderman','Black Panther','Dr. Strange']
// let elm=<ol>
//   <li>{justiceLeague[0]}</li>
//   <li>{justiceLeague[1]}</li>
//   <li>{justiceLeague[2]}</li>
//   <li>{justiceLeague[3]}</li>
//   <li>{justiceLeague[4]}</li>
//   <li>{justiceLeague[5]}</li>
//   <li>{justiceLeague[6]}</li>  
// </ol>

//let elm=<ol>{justiceLeague.map((val,idx)=><li key={idx}>{val}</li>)}</ol>

//ReactDOM.render(elm, document.getElementById('root'));

class HeroesList extends  Component{
  state={
        quantity:0
      }

  increaseHandler = () => {
    console.log("increase qty")
    this.setState({ 
     quantity : this.state.quantity + 1
    })
  }
  decreaseHandler = () => {
    this.setState({ 
      quantity : this.state.quantity - 1
    
  })
}
  render(){
     return <div>
                <h1>
                  {this.props.title} | version: {this.props.version + 10}
                </h1>
              
              <ol>
                  {
                    this.props.team.map((val,idx)=><li key={idx}>{val}</li>)
                  }
            </ol>
            <h2>{this.props.children}</h2>
            <h3>Quantity In Stock:{this.state.quantity}</h3>
            <button onClick={this.increaseHandler}>Increase Qty</button>
            <button onClick={this.decreaseHandler}>Decrease Qty</button>
            </div>
}
}
HeroesList.defaultProps={
  version:0,
  title:"Default App Title"
}
HeroesList.propTypes={
  version:PropTypes.number.isRequired,
  title:PropTypes.string.isRequired
}
class App extends Component{
   justiceLeague = ['Batman','Superman','Aquaman','Flash','Wonder Women','Cyborg','Green Lantern','Namor']
   avengers=['Ironman','Thor','Hulk','Vision','Black Widow','Spiderman','Black Panther','Dr. Strange']
  render(){
    return <div>
              <HeroesList version={101} title="Justice League" team={this.justiceLeague}>Coming soon</HeroesList>
              <HeroesList version={105} title="Avengers" team={this.avengers}/>
           </div>
  
  }
}
//ReactDOM.render(<h1>Hello World</h1>,document.getElementById('root'))
ReactDOM.render(<App/>, document.getElementById('root'));