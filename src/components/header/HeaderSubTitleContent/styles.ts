import { styled } from 'styled-components'

export const HeaderSubTitleContainer = styled.div`
    display: flex;
    align-items: flex-end;
    width:  100%;
`

export const HeaderSubTitle = styled.span`
    color: ${({theme}) => theme.colors.grey_300};
    font-weight: ${({theme}) => theme.fontWeights.semi_bold};
`
