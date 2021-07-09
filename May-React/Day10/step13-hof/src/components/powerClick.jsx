import{Component} from "react"
import WithPowerBooster from './withPowerBooster'
class PowerClick extends Component{
    // state={
    //     power:0
    // }
    // increasePower=() => {
    //     this.setState({
    //      power : this.state.power += 1
    //     })
        
    // }
    render(){
        return<div>
            <h1>power Click Component|Power is: { this.props.pow}</h1>
            <button style={{width:'300px',height:'100px',backgroundColor:'#endregion'}} 
            onClick={this.props.boostPower}>
            </button>
        </div>
    }
}
//export default PowerClick
export default WithPowerBooster(PowerClick)