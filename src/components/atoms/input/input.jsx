import React from "react";
import StyledInput from './input.styles.jsx'

const Input = ({type, value, placeholder, onChange, width, height, bottom, ...props}) => {

    return (
            <StyledInput 
            type={type} 
            value={value} 
            onChange={onChange} 
            placeholder={placeholder} 
            width={width}
            height={height}
            bottom={bottom}
            {...props}/>
    )
}

export default Input