import { ButtonTextStyled } from "./styles";	

interface ButtonContentProps {
    text: string
}

export function ButtonContent({text}: ButtonContentProps) {
    return (
        <ButtonTextStyled>{text}</ButtonTextStyled>
    )
}
