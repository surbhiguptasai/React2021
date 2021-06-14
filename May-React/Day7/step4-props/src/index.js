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
  //defaultProps and PropTypes are reserved keywords
  // static defaultProps={
  //   version:0,
  //   // title:"My Fav Hero List"
  // }
  // static propTypes={
  //   version:PropTypes.number,
  //   title:PropTypes.string.isRequired
  //}
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
              <HeroesList version="" title="Avengers" team={this.avengers}/>
           </div>
  
  }
}
//ReactDOM.render(<h1>Hello World</h1>,document.getElementById('root'))
ReactDOM.render(<App/>, document.getElementById('root'));