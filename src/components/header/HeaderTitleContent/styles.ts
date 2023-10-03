import { styled } from 'styled-components'

export const HeaderTitleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`

export const HeaderTitle = styled.h1`
    color: ${({theme}) => theme.colors.white};
`
