import React, { Component } from "react";
import Table from "./components/table";
import Form from "./components/form";
import ApiEx from "./components/apiEx";
import { BrowserRouter ,Routes, Route, Link} from 'react-router-dom';


class App extends Component {
    state = {
        charData: [
            { name: "Elango", job: 'Developer'
                ,phone:21345,education:"CS",experience:3+"years",state:"tamlinadu",address:"akjdhakjgcdghs dsa",gender:"male"},
            { name: "Panneer", job: 'Farmer'
                ,phone:21345,education:"CS",experience:3,state:"tamlinadu",address:"akjdhakjgcdghs dsa",gender:"male"
            },
            { name: "Arun", job: 'Driver' 
                ,phone:21345,education:"CS",experience:3,state:"tamlinadu",address:"akjdhakjgcdghs dsa",gender:"male"
            },
            { name: "Shot", job: 'Teacher' 
                ,phone:21345,education:"CS",experience:3,state:"tamlinadu",address:"akjdhakjgcdghs dsa",gender:"male"
            },
            { name: "Ace", job: 'Pirate' 
                ,phone:21345,education:"CS",experience:3,state:"tamlinadu",address:"akjdhakjgcdghs dsa",gender:"male"
            },
            

        ],
       
    }

    removeChar = (index) => {
        const { charData } = this.state;
        const filteredData = charData.filter((c, i) => i !== index);
        this.setState({ charData: filteredData });
    }

    handleSubmit = (newChar) => {
        this.setState({
            charData: [...this.state.charData, newChar],
        });
    }
    render() {

        const charData=this.state.charData
        
        return (
            <div>
             
               <BrowserRouter>

               <div><Link to="/form">form</Link></div><br />
               <div><Link to="/table">table</Link></div><br />
               
              
               {<Link to="/">blackPage</Link> }
        
                <Routes>
                    <Route path="/Table" element={<Table charData={charData} removeChar={this.removeChar} />}/>
                    <Route path="/form" element={<Form handleSubmit={this.handleSubmit} />}/>
                </Routes>
               </BrowserRouter>
            </div>
        );
    }
}

export default App;



