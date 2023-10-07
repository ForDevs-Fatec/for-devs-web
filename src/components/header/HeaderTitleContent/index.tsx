import { ElementType } from 'react'
import { HeaderTitleContainer, HeaderTitle } from './styles'

interface HeaderTitleContentProps {
    icon: ElementType,
    title: string
}

export function HeaderTitleContent({icon: Icon, title}: HeaderTitleContentProps) {
    return(
        <HeaderTitleContainer>
                <Icon 
                    size={32}
                    color='#ffffff'
                />
                <HeaderTitle>{title}</HeaderTitle>
        </HeaderTitleContainer>
    )
}