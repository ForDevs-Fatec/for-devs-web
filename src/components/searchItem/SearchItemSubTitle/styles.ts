import { styled } from 'styled-components'

export const SubTitleItem = styled.span`
    color: ${({ theme }) => theme.colors.grey_300};
    font-weight: ${({theme}) => theme.fontWeights.light};
    font-size: ${({theme}) => theme.fontSizes.small};
`