import { styled } from 'styled-components'

export const TitleItem = styled.h1`
    font-weight: ${({theme}) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.gray_text_primary}
`