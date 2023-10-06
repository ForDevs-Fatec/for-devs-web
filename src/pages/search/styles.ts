import {styled} from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    padding: 1rem 2rem;
`

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;

    width: 100%;
`;

export const MainContainer = styled.main``

export const SearchSectionWrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 0.5rem;

    @media (max-width: 564px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const SectionInput = styled.section`
    grid-column: 1/10;

    @media (max-width: 564px) {
        grid-column: 1/2;
    }
`

export const SectionButton = styled.section`
    grid-column: 10/11;

    @media (max-width: 564px) {
        grid-column: 1/2;
    }
`

export const MainSectionItems = styled.section`
    display: flex;
    flex-direction: column;
    
    gap: 0.5rem;

    padding: 2.5rem 0;
`