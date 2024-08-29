import {useState} from "react"

function Scooter(){
    const[scooter,setScooter]=useState({
        color : "red",
        brand : "honda",
        model : "active",
        year : 2020,
    });
    function setColor(){
        setScooter(previouseState=>{
            return{...previouseState,color : "blue"}
        })
    }

    console.log("current state " + scooter)

    return(<>
    <h1>Scooter</h1>
    <p>color : {scooter.color} </p>

    <p>brand : {scooter.brand} </p>

    <p>model : {scooter.model} </p>

    <p>year  : {scooter.year}  </p>

    <button onClick={setColor}>change</button>

    </>

    )
    
}
export default Scooter;

