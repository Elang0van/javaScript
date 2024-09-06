import { useState } from "react"
import UserTable from "./table/userTable"
import Form from "./form/userForm"
import CheckboxButtonForm from "./form/check"



function App() {

  const userData = [
    { name: "elango", email: "ace002", phone: 807308279, address: "karapakkam sadagopan street" },
    { name: "elango", email: "ace002", phone: 807308279, address: "karapakkam sadagopan street" },
    { name: "elango", email: "ace002", phone: 807308279, address: "karapakkam sadagopan street" },
    { name: "elango", email: "ace002", phone: 807308279, address: "karapakkam sadagopan street" }
  ]

  const [users, setUsers] = useState(userData)
  const [checked,setChacked] = useState(false);
  const [editing,setEditing]=useState(false)

  const initialFormState={name:"",email:"",phone:0,address:""}
  const [currentUser,setCurrentUser]=useState(initialFormState)
  

  function editRow(user){
   setEditing(true)
   setCurrentUser({name:user.id , email:user.email , phone:user.phone , address:user.address})
  }


 

  function addUser(user) {
    setUsers([...users, user])
  }


  function inputChange(dataIdex){
    setUsers(prev=>
      prev.map((user,index)=>{
        index===dataIdex?setChacked(true):user   
  })
    )  

  }

  return (
    <div className="container">
      <div className="flex-row">
        {editing? (<div className="flex-large">
          <h1>Form</h1>
          <Form addUser={addUser} />
        </div>):(<div className="flex-large">
          <h1>Table</h1>
          <UserTable users={users} inputChange={inputChange} setChacked={setChacked} 
             checked={checked} setEditing={setEditing} editRow={editRow}
           />
            </div>)}
      </div>
    </div>
    // <> <CheckboxButtonForm/></>
  )
}

export default App


