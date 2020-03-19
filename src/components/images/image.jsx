import React from 'react'

import StyledImage from './image.styles.jsx'

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
        {...props}/>
    )
}

export default Image