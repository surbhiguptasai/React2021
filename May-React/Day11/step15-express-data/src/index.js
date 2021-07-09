import {React,Component} from 'react';
import ReactDOM from 'react-dom';
import ContactList from "./components/ContactList"

class MainApp extends Component{
    render(){
        return <div>
            <ContactList/>
        </div>
    }
}

ReactDOM.render(<MainApp/>,document.getElementById('root'));
