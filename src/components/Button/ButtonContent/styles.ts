import {styled} from 'styled-components'

export const ButtonTextStyled = styled.span`
    color: ${({theme}) => theme.colors.white};
    font-size: ${({theme}) => theme.fontSizes.small};
    font-weight: ${({theme}) => theme.fontWeights.semi_bold};
`