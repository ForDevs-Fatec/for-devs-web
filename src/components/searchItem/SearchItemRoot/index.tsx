import { ReactNode } from "react";
import { Container } from "./styles";

interface SearchItemRootProps {
    children: ReactNode
}

export function SearchItemRoot({children}: SearchItemRootProps) {
    return (
        <Container>
            {children}
        </Container>
    )
}