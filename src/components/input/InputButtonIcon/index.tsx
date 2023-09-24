import { ButtonHTMLAttributes, ElementType } from "react";
import { ButtonStyled } from "./styles";

interface InputButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: ElementType
}

export function InputButtonIcon({ icon:  Icon, ...rest }: InputButtonIconProps) {
    return(
        <ButtonStyled {...rest}>
            <Icon 
                size={24}
                color='#7c7c8a'
            />
        </ButtonStyled>
    )
}