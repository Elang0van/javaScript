import React, { Component } from "react";
import { BrowserRouter ,Routes, Route, Link} from 'react-router-dom';

class Form extends Component {
    initialState = {
        name:"",
        job:"",
        phone:isNaN?"":0,
        address:"",
      
    }

    state = this.initialState;


    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log("submitted");
        this.setState(this.initialState);
        let character = this.state;
        this.props.handleSubmit(character);
      
    }

    render() {
        return (<div>
            <form>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                /><br/>

                <label htmlFor="job">Job</label>
                <input
                    type="text"
                    name="job"
                    id="job"
                    value={this.state.job}
                    onChange={this.handleChange}
                /><br/>

                <label htmlFor="">
                   phone <br /><input type="phone" 
                    name="phone" 
                    value={this.state.phone}
                     onChange={this.handleChange}/>
                </label><br />
{/* 
                <label htmlFor="">Address</label>    
                <textarea name="address" onChange={this.handleChange} value={this.state.Address}></textarea>  */}

<label>
                Enter your address:
                <textarea
                    name="address"
                    value={this.state.address}
                    onChange={this.handleChange}
                    placeholder="Address"
                />
            </label>

                <input
                    type="button"
                    value="Submit"
                    onClick={this.submitHandler}
                /><br/>
            </form>
           
            <Link to="/">blackPage</Link>
           
            
            
            </div>
        );
    }
}

export default Form;
