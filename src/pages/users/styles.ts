import { styled } from 'styled-components'

export const Container = styled.div`
    padding: 1rem 2rem;
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

    max-height: 1250px;
    height: 100vh;

    overflow-y: auto;
`