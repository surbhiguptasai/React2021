import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header'
import Footer from './components/footer'
import Main from './components/main'
import Article from './components/article'

class App extends Component{
  render(){
return <div>
          <Header/>
          <Main>
            <Article/>
            <Article/>
            <Article/>
          </Main>
          <Footer/>
        </div>
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));