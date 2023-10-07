import { styled } from 'styled-components'

export const HeaderRootContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    padding-left: 1rem;

    @media (max-width: 870px) {
        padding: 0;
    }
`;