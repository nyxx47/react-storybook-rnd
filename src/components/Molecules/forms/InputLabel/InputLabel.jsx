import React from 'react'
import { Input } from "../../../../components";
import StyledLabel from './InputLabel.styles.jsx';
import { string, func } from 'prop-types';

const InputLabel = ({ title, type, value, onChange, width, height, bottom, label, labelBottom }) => {

    return(
        <>
            <StyledLabel labelBottom={labelBottom} label={label}>{title}</StyledLabel>
            <Input type={type} value={value} onChange={onChange} width={width} height={height} bottom={bottom}/>
        </>
    )
}

InputLabel.propTypes = {
    title: string,
    type: string,
    value: string,
    onChange: func,
    width: string,
    height: string,
    bottom: string,
    label: string,
    labelBottom: string
}

export default InputLabel