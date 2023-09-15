import {styled} from 'styled-components'

export const HeaderContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 100%;
`

export const HeaderContentTitle = styled.h1`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    font-weight: ${props => props.theme.fontWeights.bold};
    color: ${props => props.theme.colors.gray_title};

    @media (max-width: 660px) {
        font-size: 1rem;
    }
`

export const HeaderContentSubtitle = styled.span`
    font-size: 1rem;
    font-weight: ${props => props.theme.fontWeights.semi_bold};
    color: ${props => props.theme.colors.gray_text_primary};

    @media (max-width: 660px) {
        display: none;
    }
`