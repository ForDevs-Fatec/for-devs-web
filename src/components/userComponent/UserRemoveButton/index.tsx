import { ButtonHTMLAttributes, ElementType } from 'react'
import { ButtonContainer } from './styles'

interface UserRemoveButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: ElementType
}

export function UserRemoveButton({icon: Icon, ...props}: UserRemoveButtonProps) {
    return(
        <ButtonContainer {...props}>
            <Icon size={24} color='#ffffff'/>
        </ButtonContainer>
    )
}