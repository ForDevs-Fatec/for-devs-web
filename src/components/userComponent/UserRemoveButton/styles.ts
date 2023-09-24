import { styled } from 'styled-components'

export const ButtonContainer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1rem;

    border-radius: 0.5rem;

    cursor: pointer;

    background: none;
    border: none;

    transition: all 0.2s;

    &:hover {
        background: rgba(255, 255, 255, 0.1);
    }
`