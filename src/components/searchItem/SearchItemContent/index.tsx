import { ReactNode } from "react";
import { Container } from "./styles";

interface SearchItemContentProps {
    children: ReactNode
}

export function SearchItemContent({children}: SearchItemContentProps) {
    return (
        <Container>
            {children}
        </Container>
    )
}