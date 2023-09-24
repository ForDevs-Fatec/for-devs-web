import { ReactNode } from "react";
import { HeaderTitleContainer } from "./styles";

interface HeaderTitleWrapperProps {
    children: ReactNode;
}

export function HeaderTitleWrapper({children}: HeaderTitleWrapperProps) {
    return (
        <HeaderTitleContainer>
            {children}
        </HeaderTitleContainer>
    )
}