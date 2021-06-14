import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// let elm = React.createElement("h1", null,"Hello World !!!");;
// let elm = React.createElement("ul", null, React.createElement("li", null, " List Item "), React.createElement("li", null, " List Item "), React.createElement("li", null, " List Item "));
// let elm=<ul>
//           <li>List Item 1</li>
//           <li>List Item 2</li>
//           <li>List Item 3</li>
//         </ul>

/*

1. jsx needs one wrapping element / jsx must return a single root element
2. orphan tags needs to be closed
3. if you need to return multiple element and dont want to wrap them in a div use React.Fragment or <>;
4. intropolation using {} 
5. className instead of class attribute
6. htmlFor instead of for attribute on input elements
7. use defaultValue instead of value on input element

*/
// let elm=<div>
//   <header>
// <h1>Welcome to React Application</h1>
// </header>
// <section>
// <article>
//     Content 1
//     <br/>
//     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis aliquam recusandae cumque autem dolorum nihil dignissimos voluptatibus debitis ipsum iure voluptatum, earum sapiente quia repudiandae amet voluptas veniam magni ipsam!
//     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis aliquam recusandae cumque autem dolorum nihil dignissimos voluptatibus debitis ipsum iure voluptatum, earum sapiente quia repudiandae amet voluptas veniam magni ipsam!
//     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis aliquam recusandae cumque autem dolorum nihil dignissimos voluptatibus debitis ipsum iure voluptatum, earum sapiente quia repudiandae amet voluptas veniam magni ipsam!
// </article>
// <article>
//     Content 2
//     <br/>
//     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis aliquam recusandae cumque autem dolorum nihil dignissimos voluptatibus debitis ipsum iure voluptatum, earum sapiente quia repudiandae amet voluptas veniam magni ipsam!
//     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis aliquam recusandae cumque autem dolorum nihil dignissimos voluptatibus debitis ipsum iure voluptatum, earum sapiente quia repudiandae amet voluptas veniam magni ipsam!
//     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis aliquam recusandae cumque autem dolorum nihil dignissimos voluptatibus debitis ipsum iure voluptatum, earum sapiente quia repudiandae amet voluptas veniam magni ipsam!
// </article>
// <article>
//     Content 3
//     <br/>
//     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis aliquam recusandae cumque autem dolorum nihil dignissimos voluptatibus debitis ipsum iure voluptatum, earum sapiente quia repudiandae amet voluptas veniam magni ipsam!
//     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis aliquam recusandae cumque autem dolorum nihil dignissimos voluptatibus debitis ipsum iure voluptatum, earum sapiente quia repudiandae amet voluptas veniam magni ipsam!
//     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis aliquam recusandae cumque autem dolorum nihil dignissimos voluptatibus debitis ipsum iure voluptatum, earum sapiente quia repudiandae amet voluptas veniam magni ipsam!
// </article>
// </section>
// <footer>
// <p>
//     &copy; copyrights reserved by my company.
// </p>
// </footer>
//</div>



/* let elm = function(){
  return <div>
            <article> Article 1 </article>
            <article> Article 2 </article>
            <article> Article 3 </article>
         </div>
};

ReactDOM.render(elm(), document.getElementById('root')); */

/* function Element(){
  return <> //or <React.Fragment>
            <div>
                <article> Article 1 </article>
                <article> Article 2 </article>
                <article> Article 3 </article>
              </div>
              <div>
                <article> Article 1 </article>
                <article> Article 2 </article>
                <article> Article 3 </article>
              </div>
          </>
} */

class Article1 extends Component{
  render(){
    return <React.Fragment>
            <article className="box1"> Article 1 Content { this.props.count } 
              <label htmlFor="username"> <input type="text" defaultValue="user name" id="username" /></label>
            </article>
          </React.Fragment>
  }
}
class Article2 extends Component{
  render(){
    return <article className="box2"> Article 2 Content { this.props.count } </article>
  }
}
class Element extends Component{
  render(){
    return <>
            <div>
                <Article1 count="1"/>
                <Article2 count="2"/>
                <Article1 count="3"/>
                <Article2 count="4"/>
            </div>
            <div>
              <Article1 count="5"/>
              <Article2 count="6"/>
              <Article1 count="7"/>
            </div>
          </>
  }
}
//ReactDOM.render(<h1>Hello World</h1>, document.getElementById('root'));
//ReactDOM.render(elm, document.getElementById('root'));
ReactDOM.render(<Element/>, document.getElementById('root'));