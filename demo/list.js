import { useState } from "react"

function List(){
    const [list,setList]=useState([])
    const [count,setCount]=useState(1)

    function addItem(){
     const ItemName='item'+count;
     setList((previouseState)=>{
        return [...previouseState,ItemName]
     })
     setCount((previouseState)=>{return previouseState+1})
    }
    console.log("current state "+ list)

    return(
        <>
        <h1>List</h1>

        <button onClick={addItem}>Add</button>
        <ul>{list.map((el,index) =>  <li key={index}> {el}</li>)}
        </ul>
</>   
    )
}

export default List;