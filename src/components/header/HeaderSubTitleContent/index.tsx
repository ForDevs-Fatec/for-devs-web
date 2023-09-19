import { HeaderSubTitleContainer, HeaderSubTitle } from './styles'

interface HeaderTitleContentProps {
    subtitle: string
}

export function HeaderSubTitleContent({subtitle}: HeaderTitleContentProps) {
    return(
        <HeaderSubTitleContainer>
            <HeaderSubTitle>{subtitle}</HeaderSubTitle>
        </HeaderSubTitleContainer>
    )
}