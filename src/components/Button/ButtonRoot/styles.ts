import {styled} from 'styled-components'

export const ButtonPrimaryStyled = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    
    width: 100%;
    padding: 1.2rem;

    border: none;
    border-radius: 0.375rem;

    background-color: ${({theme}) => theme.colors.blue_500};

    cursor: pointer;
    
    transition: all 0.1s;

    &:hover {
        background-color: ${({theme}) => theme.colors.blue_300};
    }
`;