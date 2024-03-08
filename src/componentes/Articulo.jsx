"use client"
import Image from "next/image";
import { getImgProps } from "next/dist/shared/lib/get-img-props";
import React, {useState} from "react";
export default function Articulo(props){
    const [click , setClick] = useState(false);
    const article = () => {
    setClick(!click);
    };
    return(
        <>
        <article className="grid grid-cols-3 grid-rows-3 mb-40">
            <div className="row-start-1 row-end-4 col-start-1 col-end-2 place-self-center md-pr-5 pr-10">
               <img src={props.logo}>
               </img>
            </div>
            <div className=" col-start-2 col-end-4 row-start-1 row-end-4 self-center border-l border-black pl-10">
                <h1 className="text-left mb-3">{props.titulo}</h1> 
                {props.contenidoLibre}
                <div className={`${click ? "block" : "hidden"}`}>
                    <Image
                    src= "/imagen-zero.jpg"
                    width={150}
                    height={150}
                    alt="LOGO EMPRESA"
                    className="mx-auto"
                    />
                {props.contenidoOculto}
                    <div className="grid grid-cols-2 grid-rows-1">
                    <Image
                    src= "/imagen-zero.jpg"
                    width={150}
                    height={150}
                    alt="LOGO EMPRESA"
                    className=" ml-auto"
                    />
                    <Image
                    src= "/imagen-zero.jpg"
                    width={150}
                    height={150}
                    alt="LOGO EMPRESA"
                    />
                    </div>
                    <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, dolor. Earum, eius minima nesciunt saepe quia quam in temporibus tenetur praesentium. Laboriosam beatae itaque suscipit facilis nisi tenetur vitae quo?
                    <div>
                    <Image
                    src= "/imagen-zero.jpg"
                    width={150}
                    height={150}
                    alt="LOGO EMPRESA"
                    className="inline-block"
                    />
                    <Image
                    src= "/imagen-zero.jpg"
                    width={150}
                    height={150}
                    alt="LOGO EMPRESA"
                    className="inline-block"
                    />
                    </div>
                    cierre de articulo
                    </div>
                </div>
                <div className="mt-5">
                    <button className="bg-state-500 text-white rounded px-3 py-1 bg-green-800" onClick={article}>{click ? "Ver menos":"Ver más"}</button>
                </div>
            </div>            
        </article>
        </>
    );
}