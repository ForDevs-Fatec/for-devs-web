import {styled} from 'styled-components'

export const InputRootContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    padding: 1rem;
    
    background-color: ${({theme}) => theme.colors.grey_background};
    
    border-radius: 0.375rem;
`