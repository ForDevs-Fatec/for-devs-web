import { HeaderLogoContainer } from './styles'

import { ReactNode } from 'react'

interface HeaderLogoWrapperProps {
    children: ReactNode
}

export function HeaderLogoWrapper({children}: HeaderLogoWrapperProps) {
    return (
        <HeaderLogoContainer>
            {children}
        </HeaderLogoContainer>
    )
}