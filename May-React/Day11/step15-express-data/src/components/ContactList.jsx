import { Component } from "react"; 
import axios from 'axios'; 

class ContactList extends Component{ 
    state = { 
    contactlist : [] 
} 
componentDidMount(){ 
    this.reload(); 
} 
reload = ()=>{ 
    axios.get("http://localhost:3030/data").then((res)=>{ 
     this.setState({ 
        contactlist : res.data 
    }) 
}).catch((error)=>{ 
        console.log("Error : ", error) 
    }) 
} 
render(){ 
        return <div> 
            <h1> My Contacts Online </h1> 
            <hr /> 
            <ol> 
            { 
            this.state.contactlist.map((val, idx)=>{ 
                return <li key={ idx }> 
                            FirstName : {val.firstname} | 
                            LastName : {val.lastname} | 
                            City : {val.city} | 
                            Power : {val.power} | 
                        </li> 
                }) 
            } 
            </ol> 
        </div> 
} 
}; 

export default ContactList;