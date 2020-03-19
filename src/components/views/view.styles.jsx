import styled from 'styled-components'
import breakpoints from '../particles/'

const isDisplayProperty = props => {

    switch(props.isEqualFlex){
        case "flex":
            return "flex";
            break;
        case "block":
            return "block";
            break;
        case "inline-block":
            return "inline-block";
            break;
        default: 
            return "flex"
            break
    }
}

const masked = props => {

    if(props.masked){
        return "hidden";
    }else{
        return "visible";
    }
}

export const StyledView = styled.div`
    display: ${props => isDisplayProperty(props)};
    flex-direction: ${props => props.direction};
    flex: ${props => props.flexValue ? '1': 'none'};
    justify-content: ${props => props.justify};
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.backgroundColor};
    border-radius: ${props => props.radius};
    box-shadow: ${props => props.isBoxShadow}; //10px 20px 50px rgba(149, 163, 180, 0.1);
    overflow: ${props => props.overflow};
    position: ${props => props.position};
    padding: ${props => props.padding};
    margin: ${props => props.margin};
    box-sizing: border-box;
    

    @media ${breakpoints.mobileL} {
        width: ${props => props.isEqualWidth} !important;
        height: ${props => props.isEqualHeight} !important;
        background-color: ${props => props.isEqualBackground};
        flex-direction: ${props => props.isEqualDirection};
    }
`

export default StyledView