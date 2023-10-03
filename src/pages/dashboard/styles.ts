import { styled } from 'styled-components'

export const Container = styled.div`
    background-color: ${({theme}) => theme.colors.black_300};
    padding: 1rem 2rem;
`

export const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;

    width: 100%;
`

export const MainContent = styled.main`
    display: grid;

    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 1.5rem;
    grid-row-gap: 2rem;

    margin-top: 1rem;

    height: 100vh;
`