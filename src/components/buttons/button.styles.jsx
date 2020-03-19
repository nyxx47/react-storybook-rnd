import styled from 'styled-components'

const isBackgroundColor = props => {
  if(!props.variant) return "#001CF9"
  
  let color;
  switch(props.variant){
    case "primary":
      color = "#001CF9"
      break;
    case "secondary":
      color = "#F7FBFF"
      break;
    default:
      color = "#001CF9"
      break;
  }

  return color;
}


const isHover = props => {
  let color;
  switch(props.variant){
    case "primary":
      color = "#F7FBFF"
      break;
    case "secondary":
      color = "#F7FBFF"
      break;
    default:
      color = "#001CF9"
      break;
  }
  return color;
}


const isCursor = props => {
  if(props.variant == "disabled"){
    return "not-allowed"
  }else{
    return "pointer"
  }
}

const isColor = props => {
  if(props.variant == "secondary"){
    return "#001CF9"
  }else{
    return "#ffffff"
  }
}


const isPointer = props => {
  if(props.variant == "disabled"){
    return "none"
  }else{
    return "all"
  }
}

const border = props => {

  if(!props.border) return "none"

  switch (props.border) {
    case 'primary':
      return "#001CF9"
      break;
    case 'secondary':
      return "#F7FBFF"
    default:
      return "none"
      break;
  }
}

export const StyledButton = styled.button`
    position: relative;
    display: inline-block;
    padding: 8px 12px 8px 12px;
    width: ${props => props.width};
    height: ${props => props.height};
    min-width: 120px;
    border: 1px solid ${props => border(props)};
    border-radius: 5px;
    background-color: ${props => isBackgroundColor(props)};
    cursor: ${props => isCursor(props)};
    pointer-events: ${props => isPointer(props)};
    text-decoration: none;
    transition: all 0.4s ease;
    white-space: nowrap;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    text-align: center;
    color: ${props => isColor(props)};
    &:hover{
        background: ${props => isHover(props)};
      }
    &:focus{
      outline: none;
    }

    &:active {
      outline: none;
  }
`

export const StyledLinkButton = styled(StyledButton).attrs({
  as: "a"
})`
  text-deocration: none;
`;

export const SyledButtonIcon = styled.span`
  position: ${props => props.iconPosition};
  right: ${props => props.iconRight};
  top: ${props => props.iconTop};
  left: ${props => props.iconLeft};
  bottom: ${props => props.iconBottom};
`

export default StyledButton