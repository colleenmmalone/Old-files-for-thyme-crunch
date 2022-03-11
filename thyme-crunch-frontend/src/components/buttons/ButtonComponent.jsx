import React from "react";

export default function ButtonComponent(props){

    return(
        <button 
            id={props.id} 
            onClick={props.onClick} 
            className={props.className}
        >
            {props.placeholder}
        </button>
    )
}