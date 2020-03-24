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
    isEqualWidth: 'Width in responsive mode',
    isEqualHeight: 'Height in responsive mode',
    isEqualFlex: 'flex in responsive mode',
    direction: 'column'|'column-reverse'|'row'|'row-reverse'|'inherit',
    isEqualDirection: 'direction in responsive mode',
    justify: 'flex-start'|'flex-end'|'center'|'space-between'|'space-around'|'space-evenly',
    flexValue: '1'|'its represent flex: number; and its optional',
    position: 'static'|'relative'|'absolute'|'fixed'|'sticky',
    margin: '10px',
    overflow: 'visible'|'hidden'|'scroll'|'auto'|'inherit',
    backgroundColor: string,
    isEqualBackground: string,
    isBoxShadow: '10px 20px 50px rgba(149, 163, 180, 0.1)',
    radius: '10px'
}

export default View