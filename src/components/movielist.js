import React, { useEffect, useState } from "react";
import {Movies} from "./data";

import Card from "react-bootstrap/Card";
import ReactStars from "react-stars";
import Moviecard from "./Moviecard";
import My_button from "./My_button";
function Movielist() {
  const [movie,setmovie]=useState(Movies)
  const [timer,settimer]=useState(0);
  /*useEffect(()=>{const x=JSON.parse(localStorage.getItem("Movies"));
    setmovie([...movie,x])},[]);*/

    useEffect(()=>{settimer(timer+1)},[])
    console.log(Movies);
  return ( 
    <div style={{display:"flex",flexWrap:'wrap'}}>
     {/* <span>{timer}</span> */}
        { Movies.map(e=>
       <Moviecard movie={e}/>
     )}
     </div>
 )
}
export default Movielist;
