import {styled} from 'styled-components'

export const HeaderRootContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 400px) {
        flex-direction: column-reverse;
        align-items: flex-end;
    }
`