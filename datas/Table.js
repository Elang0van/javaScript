import Form from "./Form";


function Table(){

    function addData(){

    }
    
    return<table style={{
        border: "3px solid #ddd",
        padding: "8px",
        width:"100%"
 
    }}>
        <thead>
        <tr style={{
              border: "1px solid #ddd",
              padding: "8px",
           
        }}>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Gender</th>
            <th>State</th>
            <th>Pincode</th>
            <th>laguges</th>
            <th>About</th>
            <th>Update</th>
            <th>Delete</th>
        </tr>
        </thead>

        
        <tr>
        <button onClick={addItem}>Add</button>
        <ul>{list.map((el,index) =>  <li key={index}> {el}</li>)}
        </ul>
        </tr>

    </table>

}

export default Table;