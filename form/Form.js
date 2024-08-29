 
// import { useState } from "react";

// function Form() {
//     // Initializing state with default values
//     const [inputs, setInput] = useState({});

//     function handleSubmit(e) {
//         e.preventDefault();
//         console.log("Form submitted");
//         console.log("Current State: ", inputs);
//     }
    
//     function onChangeHandle(e){
//     const {name,value}=e
//         setInput((pre)=>{return {...pre,[name]:value}})
//      }

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 Enter your name:
//                 <input
//                     type="text"
//                     //value={inputs.name}
//                     name="name"
//                     onChange={onChangeHandle}
//                 />
//             </label>
//             <br />
//             <label>
//                 Enter your age:
//                 <input
//                     type="text"
//                    // value={inputs.age}
//                    name="age"
//                     onChange={onChangeHandle}
//                 />
//             </label>
//             <br />
//             <label>
//                 Enter your email:
//                 <input
//                     type="text"
//                     //value={inputs.email}
//                     name="gmail"
//                     onChange={onChangeHandle}
//                     value={inputs.email}
//                     placeholder="@gmail.com"
//                 />
//             </label>
//             <br />
//             <label>
//                 Enter your phoneNumber:
//                 <input
//                     type="text"
//                     //value={inputs.email}
//                     name="phone"
//                     onChange={onChangeHandle}
//                     value={inputs.phone}
//                     placeholder="+91"
//                 />
//             </label>

//             <br />
//             <label>
//                 Enter your Country:
//              <select name="country" onChange={onChangeHandle}  value={inputs.country}>
//                 <option>select</option>
//                 <option value="aautralia">Autralia</option>
//                 <option value="india">india</option>
//                 <option value="japan">japan</option>
//                 <option value="UK">UK</option>
//              </select>
//             </label>
//             <label>enter your address <textarea value={inputs.about} onChange={onChangeHandle} placeholder="address"> </textarea></label>
           
//             <input type="submit" value="Submit Form" />
//         </form>
//     );
// }

// export default Form;

import { useState } from "react";

function Form() {
    // Initializing state with default values
    const [inputs, setInput] = useState({
        name: "",
        age: "",
        email: "",
        phone: "",
        country: "",
        about: ""
    });

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Form submitted");
        console.log("Current State: ", inputs);
    }
    
    function onChangeHandle(e){
        const { name, value } = e.target;
        setInput((prev) => ({ ...prev, [name]: value }));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter your name:
                <input
                    type="text"
                    name="name"
                    value={inputs.name}
                    onChange={onChangeHandle}
                />
            </label>
            <br />
            <label>
                Enter your age:
                <input
                    type="text"
                    name="age"
                    value={inputs.age}
                    onChange={onChangeHandle}
                />
            </label>
            <br />
            <label>
                Enter your email:
                <input
                    type="email"
                    name="email"
                    value={inputs.email}
                    onChange={onChangeHandle}
                    placeholder="@gmail.com"
                />
            </label>
            <br />
            <label>
                Enter your phone number:
                <input
                    type="text"
                    name="phone"
                    value={inputs.phone}
                    onChange={onChangeHandle}
                    placeholder="+91"
                />
            </label>
            <br />
            <label>
                Enter your Country:
                <select
                    name="country"
                    value={inputs.country}
                    onChange={onChangeHandle}
                >
                    <option value="">Select</option>
                    <option value="australia">Australia</option>
                    <option value="india">India</option>
                    <option value="japan">Japan</option>
                    <option value="UK">UK</option>
                </select>
            </label>
            <br />
            <label>
                Enter your address:
                <textarea
                    name="about"
                    value={inputs.about}
                    onChange={onChangeHandle}
                    placeholder="Address"
                />
            </label>
            <br />
            <input type="submit" value="Submit Form" />
        </form>
    );
}

export default Form;
