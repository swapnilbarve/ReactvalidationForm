import React, { useState } from 'react';
import axios from 'axios';

const Axiostutorial = () => {

  const data = {fname : "", lastname : ""}
  const [inputData, setInputData] = useState(data);


  const handleData = (e)=>{
    setInputData({...inputData,[e.target.name]:e.target.value})
  
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/employeeList", inputData)
    .then((res)=>{
        console.log(res);
    })
  }


  // const handleUpdate = (e) =>{
  //       e.preventDefault();
  //       axios.put("https://jsonplaceholder.typicode.com/users/1", inputData)
  //       .then((res)=>{
  //           console.log(res);
  //       })
  // }


  // const handleDelete = (e) =>{
  //   e.preventDefault();
  //   axios.delete("https://jsonplaceholder.typicode.com/users/1")
  //   .then((res)=>{
  //       console.log(res);
  //   })
  // }
  return (
    <div>
      <>
      <label>First Name: </label>
      <input type='text' name='fname' value={inputData.fname} 
      onChange={handleData}></input> <br/>
      <label>last Name: </label>
      <input type='text' name='lastname' value={inputData.lastname}
      onChange={handleData}></input> <br/>
      <button onClick={handleSubmit}>Submit</button>
      {/* <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button> */}
      </>
    </div>
  )
}

export default Axiostutorial;
