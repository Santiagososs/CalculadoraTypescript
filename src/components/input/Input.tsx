import React from 'react'
import './Input.css'

interface InputProps{
    id: string
}



function Input(props: InputProps) {
    return (
       
        <div className="container-input">
                     
            <input type="number" className="input-area" id={props.id} ></input> 

        </div>
    )
}

export default Input
