import { ButtonHTMLAttributes, ReactNode } from "react"
import {ButtonPrimaryStyled} from './styles'

interface ButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode
}

export function ButtonRoot({children, ...rest}: ButtonRootProps) {
    return(
        <ButtonPrimaryStyled {...rest}>
            {children}
        </ButtonPrimaryStyled>
    )
}