import { useState } from "react"
import "./styling.css"

function Form(){
     const [getter,setter] =useState({
        language:[]
     })
     

     function handleSubmit(e) {
        e.preventDefault();
        
        // console.log("Form submitted");
        // console.log("Current State: ", getter);
        // let arr=[123,1233];
        // arr.includes(10)
        // console.log(arr)
    }
     function onchangeaHandle(e){
    //    const name=e.target.name
    //    const value=e.target.value
    //    setter((pre)=>{return {...pre,[name]:value}})
    const { name, value, type,checked} = e.target;

    if (type === 'checkbox') {
      setter((pre) => {
        const Languages = checked
          ? [...pre.language,value]
          : pre.language.filter((lang) => lang !== value);
        return { ...pre, [name]: Languages };
      });
    } else {
      setter((prev) => ({ ...prev, [name]: value }));
    }
     }
     
    return<form onSubmit={handleSubmit}> 
        <lable> 
            Enter your name : : <input name="name" onChange={onchangeaHandle}/>
        </lable><br/>
        <div></div>
        <lable> 
            Enter your phoneNumber : : <input name="phone" onChange={onchangeaHandle}/>
        </lable><br/>
          <div></div>
        <lable> 
            Enter your Email : : <input name="email" onChange={onchangeaHandle}/>
        </lable><br/>
           
         <label>
        <input type="radio" name="gender" value="male" onChange={onchangeaHandle}/>
         Male
        </label>
        <label>
        <input type="radio" name="gender" value="female" onChange={onchangeaHandle}/>
         Female
        </label>
        <label>
        <input type="radio" name="gender" value="other" onChange={onchangeaHandle}/>
         Other
        </label><br/>

        <label>
                Select your State:
             <select name="state" onChange={onchangeaHandle}  value={getter.state}>
                <option>select</option>
                <option value="Tamilnadu">Tamilnadu</option>
                <option value="Karnadaka">Karnadaka</option>
                <option value="Andhra">Andhra</option>
                <option value="Kerala">Kerala</option>
                <option value="Dehli">Dehli</option>
             </select>
            </label><br/>

            
       <input type="checkbox"  name="language" onChange={onchangeaHandle}  value="tamil" />
       <label > tamil</label><br/>
       <input type="checkbox" name="language" onChange={onchangeaHandle}   value="english" />
       <label > english</label><br/>
       <input type="checkbox"  name="language" onChange={onchangeaHandle}  value="telugu" />
       <label > telugu</label><br/>
       
  <input type="submit" value="Submit"/>
</form>
}

export default Form;