import { styled } from 'styled-components'

export const SubTitleItem = styled.span`
    color: ${({ theme }) => theme.colors.gray_text_primary};
    font-weight: ${({theme}) => theme.fontWeights.light};
    font-size: ${({theme}) => theme.fontSizes.small};
`