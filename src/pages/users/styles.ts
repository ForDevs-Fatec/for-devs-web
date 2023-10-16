import { styled } from 'styled-components'

export const Container = styled.div`
    padding: 1rem 2rem;
    max-height: 1250px;
`
export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;

    width: 100%;
`

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    padding: 0rem 2rem 2rem 2rem;

    overflow-x: auto;
    max-height: 780px;
    width: 100%;
`