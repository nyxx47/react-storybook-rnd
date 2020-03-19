import React from 'react'

import StyledContainer from './container.styles.jsx'

const Container = ({children, isEqualWidth, isEqualHeight, flexDirection, ...props}) => (
    <StyledContainer 
        isEqualHeight={isEqualHeight} 
        isEqualWidth={isEqualWidth} 
        flexDirection={flexDirection} 
        {...props}>
        { children }
    </StyledContainer>
)

export default Container