import React from 'react'


import StyledView from './view.styles.jsx'

const View = ({ 
    children, 
    style, 
    isEqualFlex,
    flexValue, 
    direction,
    justify,
    overflow, 
    isBoxShadow, 
    width, 
    isEqualWidth, 
    isEqualHeight, 
    height, 
    radius, 
    backgroundColor, 
    isEqualBackground,
    isEqualDirection, 
    position,
    margin,
    ...props}) => {

    return (
        <StyledView 
        style={style} 
        isBoxShadow={isBoxShadow} 
        isEqualFlex={isEqualFlex}
        width={width}
        height={height}
        isEqualWidth={isEqualWidth}
        isEqualHeight={isEqualHeight}
        radius={radius}
        backgroundColor={backgroundColor}
        isEqualBackground={isEqualBackground}
        flexValue={flexValue}
        justify={justify}
        overflow={overflow}
        position={position}
        direction={direction}
        margin={margin}
        isEqualDirection={isEqualDirection}
        {...props}>
            {children}
        </StyledView>
    )
}

export default View