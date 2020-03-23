import styled from 'styled-components'

const StyledInput = styled.input`
    width: ${props => !props.width ? '250px' : props.width};
    height: ${props => !props.height ? '40px' : props.height};
    border-radius: ${props => !props.radius ? '10px' : props.radius};
    margin-bottom: ${props => !props.bottom ? '0' : props.bottom};
    background: #f7f7f8;
    padding: 5px 12px 5px 12px;
    box-sizing: border-box;
    border: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 14px;
    text-align: left;
    color: #403e3e;


    &:focus{
        outline: none;
      }
  
    &:active {
        outline: none;
    }
`

export default StyledInput