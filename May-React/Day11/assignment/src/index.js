import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import Fetch from 'fetch';
import axios from 'axios'


class MainApp extends Component{
    state={
        users : []
    }
componentDidMount(){
   
}
callApi = () =>{
     axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
            this.setState({
                users:res.data
            })
    }).catch((error)=>{
            console.log("Error:",error)
    })
}
    render(){
        return <div className="container">
            <h1>Accessing Datat using Fetch API</h1>
            <button onClick={this.callApi}>Get Data</button>
            
           <div className='card'>
           
            <table className="card-table table table-striped">
                <thead className='card-head'>
                    <tr className='card-row'>
                        <th>S No</th>
                        <th>Full Name</th>
                        <th>Title</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>City</th>
                        <th>Company Name</th>
                    </tr>
                </thead>
                <tbody className='card-body'>
                {
                    this.state.users.map( (value,idx,arr)=> {
                        return<tr key={idx}>
                        <td>{value.id}</td>
                        <td>{value.name}</td>
                        <td>{value.username}</td>
                        <td>{value.email}</td>
                        <td>{value.phone}</td>
                        <td>{value.address.city}</td>
                        <td>{value.company.name}</td>
                        </tr>
                             
                    })
                } 
                </tbody>
            </table>
           </div>
            </div>
        
    }
}

ReactDOM.render(<MainApp/>,document.getElementById('root'));
