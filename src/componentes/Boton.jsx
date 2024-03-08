"use client"
import React ,{useState} from "react";

export default function Boton() {
    const [isClick, setisClick] = useState(false);
    const navMenu = () =>{
        setisClick(!isClick);
    };
    return (
      
        <button onClick={navMenu}>
            {isClick ? (
                <svg  className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor" >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"/>
            </svg>
            )
        :( <svg  className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16m-7 6h7"/>
</svg>)    
    }</button>
            
    );
  }
  