import React from "react";
import StyledInput from './input.styles.jsx'
import { func, string } from "prop-types";

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

Input.propTypes = {
    type: string,
    value: string,
    placeholder: string,
    onChange: func,
    width: string,
    height: string,
    bottom: string
}

export default Input