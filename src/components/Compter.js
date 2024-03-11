import React, { useState } from 'react'
import My_button from './My_button'

function Compter() {
    const [count,setCount]=useState(0)
    console.log(count)
    const plus = ()=>{
         setCount(count+1)
        console.log(count)
    }
    const moins = ()=>{
        setCount(count-1)
         console.log(count)
    }
  return (
    <div style={{display:"flex", justifyContent:"center",gap:"50px"}}>
        <button onClick={plus} >
            +
        </button>
        <span>{count}</span>
        <button onClick={moins}>
            -
        </button>
        <button onClick={()=>setCount(0)}>
            reset
        </button>
    </div>
  )
}

export default Compter
