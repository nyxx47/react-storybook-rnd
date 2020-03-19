import styled from 'styled-components'

const color = props => {
    if(!props.variant) return "#403e3e"
    switch (props.variant) {
        case "primary":
            return "#403e3e"
            break;
        case "secondary":
            return "#F7FBFF"
        default:
            return "#403e3e"
            break;
    }
}

const size = props => {
    if(!props.size) return "14"
    return props.size
}

const weight = props => {
    if(!props.weight) return "400"
    switch (props.weight) {
        case "light":
            return "300"
            break;
        case "regular":
            return "400"
            break;
        case "medium":
            return "500"
            break;
        case "semi-bold":
            return "600"
            break;
        case "bold":
            return "700"
    
        default:
            break;
    }
}

const StyledText = styled.p`
    font-family: "Helvetica Neue";
    font-weight: ${props => weight(props)};
    font-size: ${props => size(props)}px;
    text-align: left;
    color: ${props => color(props)};
`

export default StyledText