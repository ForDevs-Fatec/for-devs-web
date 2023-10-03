import { InputHTMLAttributes, forwardRef } from 'react';
import { InputTextFieldStyled } from './styles';

interface InputTextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

export const InputTextField = forwardRef<HTMLInputElement, InputTextFieldProps>(
  ({ placeholder, ...rest }, ref) => {
    return <InputTextFieldStyled placeholder={placeholder} {...rest} ref={ref} />;
  }
);