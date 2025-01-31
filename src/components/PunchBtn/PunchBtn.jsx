import React from 'react'
import "./PunchBtn.css"
import { GiPunch } from "react-icons/gi";
import { RiResetLeftFill } from "react-icons/ri";

export default function PunchBtn({pv, setPv}) {
    
    function handlePunch(){
      if (pv>0) {
        setPv(pv-10)
      }
      else{
        setPv(100)
      }
    }
    
  
    return (
    <button onClick={handlePunch} className='PunchBtn'>
    {
        pv ? <GiPunch/> : <RiResetLeftFill/>
    }
    </button>
  )
}
