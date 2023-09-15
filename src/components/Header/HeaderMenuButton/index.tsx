import { ButtonHTMLAttributes, ElementType } from "react";
import {ButtonIconHeader} from './styles'

interface HeaderMenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: ElementType;
}

export function HeaderMenuButton({icon: Icon, ...rest}: HeaderMenuButtonProps) {
    return(
        <ButtonIconHeader {...rest}>
            <Icon size={32} color="#FFFFFF"/>
        </ButtonIconHeader>
    )
}