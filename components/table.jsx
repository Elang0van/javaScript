import { Component } from "react";
import "./table.css"

function TableHeader() {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Phone</th>
                <th>Education</th>
                <th>Experience</th>
                <th>State</th>
                <th>Address</th>
                <th>Gender</th>
                <th>Action</th>
            </tr>
        </thead>
    );
}

function TableBody(props) {
    const { charData, removeChar } = props;

    const rows = charData.map((c, index) => {
        return (
            <tr key={index}>
                <td>{c.name}</td>
                <td>{c.job}</td>
                <td>{c.phone}</td>
                <td>{c.education}</td>
                <td>{c.experience}</td>
                <td>{c.state}</td>
                <td>{c.address}</td>
                <td>{c.gender}</td>

                <td><button onClick={() => removeChar(index)}>Delete</button>
                     <button onClick={()=> updateRow()}>Update</button>
                  </td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

class Table extends Component {
    render() {
        const { charData, removeChar } = this.props;
        return (
            <table>
                <TableHeader/>
                <TableBody charData={charData} removeChar={removeChar} />
            </table>
        );
    }
}

export default Table;
