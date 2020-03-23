import React from 'react'

import StyledContainer from './container.styles.jsx'

const Container = ({children, isEqualWidth, isEqualHeight, flexDirection, backgroundColor, ...props}) => (
    <StyledContainer 
        isEqualHeight={isEqualHeight} 
        isEqualWidth={isEqualWidth} 
        flexDirection={flexDirection} 
        backgroundColor={backgroundColor}
        {...props}>
        { children }
    </StyledContainer>
)

export default Container