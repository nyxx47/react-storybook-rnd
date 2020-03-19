import React from 'react'

import StyledText from './text.styles.jsx'

const Text = ({children, variant, size, weight}) => {

    return(
        <StyledText variant={variant} size={size} weight={weight}>
            {children}
        </StyledText>
    )
}

export default Text