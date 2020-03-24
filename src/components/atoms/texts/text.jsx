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
    variant: 'primary'|'secondary',
    size: '12px',
    weight: 'light'|'regular'|'medium'|'semi-bold'|'bold',
    align: string,
    isEqualSize: 'represent in responsive mode',
    isEqualAlign: 'represent in responsive mode'
}

export default Text