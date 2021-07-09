import React from 'react'
function FunMemoComp(props){
   
        console.log("FunMemoComp's render was called");
        return <div> 
        <h2>Function Based Pure Component</h2> 
        <hr/> 
        <h3>Power is : {props.pow } </h3> 
        </div> 
        
}

export default FunMemoComp;