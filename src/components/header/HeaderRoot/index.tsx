import { ReactNode } from "react";
import { HeaderRootContainer } from "./styles";

interface HeaderRootProps {
    children: ReactNode;
}

export function HeaderRoot({children}: HeaderRootProps) {
    return (
        <HeaderRootContainer>
            {children}
        </HeaderRootContainer>
    )
}