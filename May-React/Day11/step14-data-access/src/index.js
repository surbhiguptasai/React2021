import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import Fetch from 'fetch';
import axios from 'axios'

class MainApp extends Component{
    state={
        users : []
    }
componentDidMount(){
    // console.log("Component is now loaded")
    // Fetch.fetchUrl("https://jsonplaceholder.typicode.com/users",(error,meta,data)=>{
    //     //console.log(JSON.parse(data).length)
    //     this.setState({
    //                 users:JSON.parse(data)
    //             })
    // })

    //this.callApi()
}
callApi = () =>{
    // console.log("Component is now loaded")
    // Fetch.fetchUrl("https://jsonplaceholder.typicode.com/users",(error,meta,data)=>{
    //     //console.log(JSON.parse(data).length)
    //     this.setState({
    //                 users:JSON.parse(data)
    //             })
    // })

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
            {/* {
                    this.state.users.forEach( (value,idx,arr)=> {
                        console.log(value)
                    })
                } */}
            {/* <ol>
                {
                    this.state.users.map( (value,idx,arr)=> {
                        return<li key={idx}>{value.name}</li>
                    })
                }
            </ol> */}

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>S No</th>
                        <th>Full Name</th>
                        <th>Title</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>City</th>
                        <th>Company Name</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.users.map( (value,idx,arr)=> {
                        return<tr key={idx}>{value.name}
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
    }
}

ReactDOM.render(<MainApp/>,document.getElementById('root'));
