import React from 'react'

import StyledView from './view.styles.jsx'
import { any, string } from 'prop-types'

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
        isEqualDirection={isEqualDirection}
        margin={margin}
        {...props}>
            {children}
        </StyledView>
    )
}

View.propTypes = {
    style: any,
    width: string,
    height: string,
    isEqualWidth: string,
    isEqualHeight: string,
    isEqualFlex: string,
    direction: string,
    isEqualDirection: string,
    justify: string,
    flexValue: string,
    position: string,
    margin: string,
    overflow: string,
    backgroundColor: string,
    isEqualBackground: string,
    isBoxShadow: string,
    radius: string
}

export default View