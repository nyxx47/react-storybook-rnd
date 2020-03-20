import React from 'react'

import StyledText from './text.styles.jsx'

const Text = ({children, variant, size, weight, align, isEqualSize, isEqualAlign, ...props}) => {

    return(
        <StyledText 
        variant={variant} 
        size={size} 
        weight={weight} 
        align={align}
        isEqualSize={isEqualSize}
        isEqualAlign={isEqualAlign}
        {...props}
        >
            {children}
        </StyledText>
    )
}

export default Text