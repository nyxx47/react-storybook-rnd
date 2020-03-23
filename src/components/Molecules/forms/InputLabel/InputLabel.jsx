import React from 'react'
import { Input } from "../../../../components";
import StyledLabel from './InputLabel.styles.jsx';

const InputLabel = ({ title, type, value, onChange, width, height, bottom }) => {

    return(
        <>
            <StyledLabel>{title}</StyledLabel>
            <Input type={type} value={value} onChange={onChange} width={width} height={height} bottom={bottom}/>
        </>
    )
}

export default InputLabel