import { styled } from 'styled-components'

export const SectionWrapperGrid = styled.section`
    border-radius: 0.5rem;
    background-color: ${({theme}) => theme.colors.black_700};
    box-shadow: 0 0 0.5rem ${({theme}) => theme.colors.black_700};
`

export const SectionWrapperGrid_1 = styled(SectionWrapperGrid)`
    grid-column: 1 / 2;
    padding: 1rem;

    @media (max-width: 1600px) {
        grid-column: 1 / 3;
    }

    @media (max-width: 870px) {
        grid-column: 1 / 5;
    }
`

export const SectionWrapperGrid_2 = styled(SectionWrapperGrid)`
    grid-column: 2 / 3;
    padding: 1rem;

    @media (max-width: 1600px) {
        grid-column: 3 / 5;
    }

    @media (max-width: 870px) {
        grid-column: 1 / 5;
    }
`

export const SectionWrapperGrid_3 = styled(SectionWrapperGrid)`
    grid-column: 3 / 4;
    padding: 1rem;

    @media (max-width: 1600px) {
        grid-column: 1 / 3;
    }

    @media (max-width: 870px) {
        grid-column: 1 / 5;
    }
`

export const SectionWrapperGrid_4 = styled(SectionWrapperGrid)`
    grid-column: 4 / 5;
    padding: 1rem;

    @media (max-width: 1600px) {
        grid-column: 3 / 5;
    }

    @media (max-width: 870px) {
        grid-column: 1 / 5;
    }
`

export const SectionWrapperGrid_5 = styled(SectionWrapperGrid)`
    grid-column: 1 / 3;
    padding: 1rem;

    @media (max-width: 870px) {
        grid-column: 1 / 5;
    }
`

export const SectionWrapperGrid_6 = styled(SectionWrapperGrid)`
    grid-column: 3 / 5;
    padding: 1rem;

    @media (max-width: 870px) {
        grid-column: 1 / 5;
    }
`

export const SectionWrapperGrid_7 = styled(SectionWrapperGrid)`
    grid-column: 1 / 2;
    padding: 1rem;

    
    @media (max-width: 1600px) {
        grid-column: 1 / 3;
    }

    @media (max-width: 870px) {
        grid-column: 1 / 5;
    }
`

export const SectionWrapperGrid_8 = styled(SectionWrapperGrid)`
    grid-column: 2 / 3;
    padding: 1rem;

    
    @media (max-width: 1600px) {
        grid-column: 3 / 5;
    }

    @media (max-width: 870px) {
        grid-column: 1 / 5;
    }
`

export const SectionWrapperGrid_9 = styled(SectionWrapperGrid)`
    grid-column: 3 / 5;
    padding: 1rem;

    
    @media (max-width: 1600px) {
        grid-column: 1 / 5;
    }

    @media (max-width: 870px) {
        grid-column: 1 / 5;
    }
`