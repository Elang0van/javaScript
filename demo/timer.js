import { useEffect, useState } from "react"

function Timer(){
    const [count,setCount]=useState(0);
    useEffect(()=>{console.log("Screen render!");
        //checkCount();
        //setCount(1)
        setTimeout(()=>{
           setCount((pre)=>{return pre+1})

        },1000)
})


function checkCount(){
    if(count >10)
        setCount(1)
}

function updateCount(){
   setCount((Pre)=> {return Pre+1})
}
    return <><h1>i have rendered {count} times</h1>
    <button onClick={updateCount}>inCrease Count</button>
    </>
}

export default Timer;