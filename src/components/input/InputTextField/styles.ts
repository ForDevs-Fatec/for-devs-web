import { styled } from "styled-components";

export const InputTextFieldStyled = styled.input`
    width: 100%;
    margin: 0 0.5rem;
    
    background-color: transparent;
    
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.grey_300};
    
    border: 0;

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: ${({ theme }) => theme.colors.grey_500};
    }
`;