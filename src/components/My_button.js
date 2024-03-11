import React from 'react'

function My_button(props) {
    console.log(props)
  return (
    <div>
        <button style={{borderRadius:"10px",backgroundColor:"black", color:"white"}}>
          {props.children}
 
        </button>
    </div>
  )
}

export default My_button