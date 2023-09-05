import { InputHTMLAttributes } from "react";
import { InputTextFieldStyled } from "./styles";

interface InputTextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
}

export function InputTextField({placeholder, ...rest}: InputTextFieldProps) {
    return(
        <InputTextFieldStyled
            placeholder={placeholder}
            {...rest}
        />
    )
}