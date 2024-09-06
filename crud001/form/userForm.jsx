import React, { useState } from 'react'

function Form(props) {

  const [data,setData]=useState({name:"",email:"",phone:0,address:""});

function handleChange(event){
// const name=event.target.name;
// const value=event.target.value;

// setData((pre)=>{return {...pre,[name]:value}})
 const{name,value}=event.target;

 setData({...data,[name]:value})
}


 return (
<form onSubmit={(e)=>{
   e.preventDefault();
   console.log("current state" ,data)
   props.addUser(data)
}}>
<label htmlFor="">Name</label>
<input type="text" name='name'onChange={handleChange} />

<label htmlFor="">Email</label>
<input type="text" name='email' onChange={handleChange}  />

<label htmlFor="">Phone</label>
<input type="text" name='phone'onChange={handleChange}/>

<label htmlFor="">Address</label>
<textarea name="address" onChange={handleChange} ></textarea>

<button >Submit</button>

</form>
  )
}
 export default  Form;