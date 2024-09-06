function UserTable(props){



    return(
        <>

        <button 
           
    >delete</button>
        <table>
            <thead>
                <tr>
                    <th>Select</th>
                    <th>Name</th>
                     <th>Email</th>
                     <th>Phone</th>
                     <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {props.users.length>0?(props.users.map((user,index)=>
                                     <tr key={index}>
                                     <td><input type="checkbox" checked={props.checked} onChange={()=>props.inputChange(index)} /></td>
                                     <td>{user.name}</td>
                                     <td>{user.email}</td>
                                     <td>{user.phone}</td>
                                     <td>{user.address}</td>
                                     <td>
                                         <button onClick={()=>props.editRow(user)}>Edit</button>
                                      </td>
                                    </tr> )):(
                    <tr>
                        <td colSpan={3}></td>
                    </tr>
                )
                }

            </tbody>
        </table>
        </>
    )
}

export default UserTable;