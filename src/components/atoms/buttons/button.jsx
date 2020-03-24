import React from 'react'
import { node, func, string } from 'prop-types'

import StyledButton, { StyledLinkButton,SyledButtonIcon } from './button.styles.jsx'

import { ArrowForward, Backpress } from "../../../assets/icons";


const Icons = {
    arrowForward: ArrowForward,
    backpress: Backpress
}

const Button = ({
    children, 
    href, 
    onClick,
    isFocus, 
    variant, 
    rounded, 
    border, 
    target, 
    icon, 
    width, 
    height, 
    iconPosition,
    iconTop,
    iconRight,
    iconLeft,
    iconBottom,
    isEqualWidth,
    isEqualHeight,
    ...props}) => {
    if(!href)
        return (
            <StyledButton 
            onClick={onClick} 
            variant={variant} 
            isFocus={isFocus}
            rounded={rounded} 
            width={width} 
            height={height} 
            border={border}
            isEqualWidth={isEqualWidth}
            isEqualHeight={isEqualHeight}
            {...props}>
                {children}
                <ButtonIcon name={icon} iconPosition={iconPosition} iconRight={iconRight}/>
            </StyledButton>
        )
    return (
        <StyledLinkButton href={href} variant={variant} target={target}>
            {children}
        </StyledLinkButton>
    )
}

const ButtonIcon = ({ name, iconPosition, iconRight, iconTop, iconLeft, iconBottom }) => {
	if (Icons[name] === undefined) return null;
	const Icon = Icons[name];
	return (
		<SyledButtonIcon 
            iconPosition={iconPosition}
            iconTop={iconTop}
            iconRight={iconRight}
            iconLeft={iconLeft}
            iconBottom={iconBottom}
        >
			<Icon />
		</SyledButtonIcon>
	);
};

Button.propTypes = {
    children: node.isRequired,
    href: string,
    target: string,
    onClick: func,
    variant: string,
    rounded: string,
    
}

Button.defaultProps = {
    children: "Text Button"
}


export default Button