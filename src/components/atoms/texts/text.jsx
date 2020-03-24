import React from 'react'

import StyledText from './text.styles.jsx'
import { string } from 'prop-types'

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

Text.propTypes = {
    variant: string,
    size: string,
    weight: string,
    align: string,
    isEqualSize: string,
    isEqualAlign: string
}

export default Text