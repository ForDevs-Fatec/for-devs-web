import { styled } from 'styled-components'

export const Container = styled.div`
    padding: 1rem 2rem;
    width: 100%;
    height: 100vh;

    @media (max-width: 870px) {
        padding: 1rem;
    }
`

export const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;

    width: 100%;
`

export const MainContent = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;

    column-gap: 1.5rem;
    row-gap: 2rem;

    width: 100%;
    padding: 1rem 0;

    @media (max-width: 1600px) {
        grid-template-columns: 2fr 2fr 2fr 2fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
    }

    @media (max-width: 870px) {
        grid-template-columns: 4fr 4fr 4fr 4fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    }
`;