import styled from 'styled-components'
import breakpoints from '../../particles'

const StyledImage = styled.img`
    width: ${props => props.width};
    height: ${props => props.height};
    position: ${props => props.position};
    top: ${props => props.top};
    left: ${props => props.left};
    right: ${props => props.right};
    bottom: ${props => props.bottom};
    margin: ${props => props.margin};

    @media ${breakpoints.mobileL} {
        position: ${props => props.isEqualposition};
        top: ${props => props.isEqualtop};
        left: ${props => props.isEqualleft};
        right: ${props => props.isEqualright};
        bottom: ${props => props.isEqualbottom};
    }
`

export default StyledImage 