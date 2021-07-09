import { Component } from "react"; 

let WithPowerBooster = ( OriginalComp ) => { 
class NewComp extends Component{ 
    state={
        power:0
    }
    increasePower=() => {
        this.setState({
         power:this.state.power+=1
        })
        
    }
    render(){ 
return <OriginalComp
boostPower={this.increasePower}
pow={this.state.power}/> 
} 
} 
return NewComp 
}; 

export default WithPowerBooster;