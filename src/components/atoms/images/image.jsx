import React from 'react'

import StyledImage from './image.styles.jsx'
import { string } from 'prop-types'

const Image = ({
    src, 
    position, 
    top, 
    left, 
    right, 
    bottom, 
    margin, 
    isEqualposition,
    isEqualtop, 
    isEqualleft, 
    isEqualright, 
    isEqualbottom,
    width,
    height, 
    ...props}) => {

    return (
        <StyledImage 
        src={src} 
        position={position} 
        top={top} 
        left={left} 
        right={right} 
        bottom={bottom} 
        margin={margin} 
        isEqualposition={isEqualposition}
        isEqualtop={isEqualtop}
        isEqualleft={isEqualleft}
        isEqualright={isEqualright}
        isEqualbottom={isEqualbottom}
        width={width}
        height={height}
        {...props}/>
    )
}

Image.propTypes = {
    src: string.isRequired,
    position: string,
    top: string,
    left: string,
    right: string,
    bottom: string,
    margin: string,
    isEqualposition: string,
    isEqualtop: string,
    isEqualleft: string,
    isEqualright: string,
    isEqualbottom: string,
    width: string,
    height: string
}

export default Image