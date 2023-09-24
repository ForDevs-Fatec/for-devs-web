import { ReactNode } from 'react'
import { Container } from './styles'

interface UserRootProps {
    children: ReactNode
}

export function UserRoot({children}: UserRootProps) {
    return (
        <Container>
            {children}
        </Container>
    )
}