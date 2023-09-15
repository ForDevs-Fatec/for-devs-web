import styled from 'styled-components'

export const ButtonIconHeader = styled.button`
    display: none;

    @media (max-width: 768px) {
        display: block;
        position: absolute;

        top: 3rem;
        left: 2rem;
        background: transparent;
        border: none;
        cursor: pointer;
        outline: none;
    }
`;