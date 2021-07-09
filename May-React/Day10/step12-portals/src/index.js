// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

// class PortalApp extends Component{
//     render(){
//         return ReactDOM.createPortal(<h2>Contents in Boxer Div Tag</h2>,
//             document.getElementById("boxer"))
//     }
// }

// class MainApp extends Component{
//     render(){
//         return<div>
//             <h1>Portal Application</h1>
//             <PortalApp/>
//         </div>
//     }
// }


// ReactDOM.render(<MainApp/>,document.getElementById('root'));


import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class PortalApp extends Component{
    render(){
        return ReactDOM.createPortal(this.props.children,
            document.getElementById("boxer"))
    }
}

class MainApp extends Component{
    state={
        showPopUp: false
    }
    togglePopUp=()=>{
        this.setState({
            showPopUp : !this.state.showPopUp
        })
    }
    render(){
        if(this.state.showPopUp){
            return <PortalApp>
                <h2>Terms and Conditions</h2>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <button onClick={this.togglePopUp}>Hide Terms and conditions</button>
            </PortalApp>
        }else{
        return<div>
            <h1>Main Application</h1>
             <p>
                Show Terms and Conditions
                <button></button>
             </p>
        </div>
    }
}
}


ReactDOM.render(<MainApp/>,document.getElementById('root'));