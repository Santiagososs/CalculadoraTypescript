import React from 'react'
import './Button.css'

interface ButtonEvent{
    click: React.MouseEventHandler<HTMLButtonElement>
}


function Button(props: ButtonEvent) {
    return (
            
       <div className="button-container">
            
         <button className="btn-soma" onClick={props.click}> + </button>
            
        </div>
    )
}

export default Button
