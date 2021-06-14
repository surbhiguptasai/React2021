import { Component } from "react"; 

class ChildComp extends Component{ 
    state={
        message:''
    }
   changeParentTitle= ()=>{
        this.props.handlerfun(this.state.message)
    }
    inputChangehandler= (evt)=>{
        this.setState({
            message: evt.target.value
        },function(evt){
            //evt.target.value=''
            
        })
    }
render(){ 
return <div> 
            <h1>Child Component</h1> 
            <hr /> 
            <h2>Title is : { this.props.title }</h2> 
            <h2>Quantity is : { this.props.qty }</h2>
            <input value={this.state.message} onChange={this.inputChangehandler } type="text" />
            <button onClick={this.changeParentTitle}>Change Title</button>
        </div> 
    } 
} 

export default ChildComp;