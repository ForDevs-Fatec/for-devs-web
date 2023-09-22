import { styled } from 'styled-components'

export const Container = styled.div`
    background-color: ${({theme}) => theme.colors.grey_primary_background};
    padding: 1rem 2rem;
`
export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;

    width: 100%;
`

export const MainContainer = styled.main`
    margin: 0 auto;

    height: 100vh;
`