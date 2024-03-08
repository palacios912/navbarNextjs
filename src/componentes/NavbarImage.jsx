"use client"
import Link from "next/link";
import React, {useState} from "react";
export default function Navbar() {
    const [isClick, setisClick] = useState(false);
    const navMenu = () =>{
    setisClick(!isClick);
    };
    return (
      
        <nav className={`px-8 flex h-72 md:h-80 justify-between bg-amanecer shadow md:flex md:items-start md:justify-between transition-all ${isClick ? "md:mb-8 mb-8":"mb-8"} bg `}>
              <div className="text-4xl cursor-pointer items-start mt-5" >
              <p>LOGO</p> 
              </div>
              <div className="text-3xl cursor-pointer md:hidden block">
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
              </div>
              <ul className={`md:flex md:items-start md:space-x-4  mt-4
              text-xl  z-[0] md:z-auto md:static absolute w-full md:h-full left-0 md:w-auto md:pl-0
              transition-all ease-in-out duration-500  ${isClick ? "top-[80px]":"top-[-200px]"}`} >
                  <li className="hover:bg-white  duration-500 p-3 "><Link href="/">Inicio</Link></li>
                  <li className="hover:bg-white md:hover:bg-transparent md:hover:text-white duration-500 p-3"><Link href="/contacto">Contacto</Link></li>
                  <li className="hover:bg-white md:hover:bg-transparent md:hover:text-white duration-500 p-3"><Link href="/nosotros">Nosotros</Link></li>
              </ul>
             
        </nav>
    );
  }
  