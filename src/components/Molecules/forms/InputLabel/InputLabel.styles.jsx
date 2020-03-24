import styled from 'styled-components'

const StyledLabel = styled.label`
    font-family: 'Montserrat', sans-serif;
    font-weight: normal;
    font-size: 12px;
    text-align: left;
    color: #403e3e;
    margin-bottom:10px;
    margin-bottom: ${props => props.labelBottom};
    display: ${props => props.label}
`

export default StyledLabel