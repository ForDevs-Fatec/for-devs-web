import { ElementType } from 'react';
import { HeaderContentContainer, HeaderContentTitle, HeaderContentSubtitle } from './styles'

interface HeaderContentProps {
    text: string;
    subTitle?: string;
    icon: ElementType;
}

export function HeaderContent({text, subTitle, icon: Icon}: HeaderContentProps) {
    return(
        <HeaderContentContainer>
            <HeaderContentTitle>
                <Icon 
                    size={32}
                    color='#ffffff'
                />
                {text}
            </HeaderContentTitle>

            <HeaderContentSubtitle>
                {subTitle}
            </HeaderContentSubtitle>
        </HeaderContentContainer>
    )
}