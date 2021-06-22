import React from 'react';
import './Title.css';


interface TitleProps {
    text: string;
    number?: Function 
}

function Title (props: TitleProps) {   
    return (
        
        <div className="container-title">
         
         <h1>{props.text}</h1>
      
        </div>
    )
}

export default Title
