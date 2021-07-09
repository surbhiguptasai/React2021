import{Component} from "react"
import WithPowerBooster from './withPowerBooster'

class PowerMove extends Component{
    // state={
    //     power:0
    // }
    // increasePower=() => {
    //     this.setState({
    //      power:this.state.power+=1
    //     })
        
    // }
    render(){
        return<div>
            <h1>power Click Component|Power is; { this.props.pow}</h1>
            <button onConMouseMove={this.props.boostPower}>

            </button>
        </div>
    }
}
//export  default PowerMove
export default WithPowerBooster(PowerMove)