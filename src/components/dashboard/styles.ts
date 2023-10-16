import { styled } from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-template-rows: repeat(5, minmax(0, 1fr));
    gap: 0.5rem;

    height: 100%;

    @media (max-width: 1368px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-template-rows: repeat(10, minmax(0, 1fr));
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
        grid-template-rows: repeat(18, minmax(0, 1fr));
    }
`
export const ChartWrapper_1 = styled.div`
    @media (max-width: 1368px) {
        grid-column: span 2 / span 2;
        grid-row: span 2 / span 2;

        grid-column-start: 1;
        grid-column-end: 2;

        grid-row-start: 1;
        grid-row-end: 3;
    }

    @media (max-width: 768px) {
        grid-row-start: 1;
        grid-row-end: 3;
    }
`

export const ChartWrapper_2 = styled.div`
    @media (max-width: 1368px) {
        grid-column: span 2 / span 2;
        grid-row: span 2 / span 2;

        grid-column-start: 2;
        grid-column-end: 3;

        grid-row-start: 1;
        grid-row-end: 3;
    }

    @media (max-width: 768px) {
        grid-column-start: 1;
        grid-column-end: 2;

        grid-row-start: 3;
        grid-row-end: 5;
    }
`

export const ChartWrapper_3 = styled.div`
    @media (max-width: 1368px) {
        grid-column: span 2 / span 2;
        grid-row: span 2 / span 2;

        grid-column-start: 1;
        grid-column-end: 2;

        grid-row-start: 3;
        grid-row-end: 5;
    }

    @media (max-width: 768px) {
        grid-column-start: 1;
        grid-column-end: 2;

        grid-row-start: 5;
        grid-row-end: 7;
    }
`

export const ChartWrapper_4 = styled.div`
    @media (max-width: 1368px) {
        grid-column: span 2 / span 2;
        grid-row: span 2 / span 2;

        grid-column-start: 2;
        grid-column-end: 3;

        grid-row-start: 3;
        grid-row-end: 5;
    }

    @media (max-width: 768px) {
        grid-column-start: 1;
        grid-column-end: 2;

        grid-row-start: 7;
        grid-row-end: 9;
    }
`

export const ChartWrapper_5 = styled.div`
    grid-column: span 2 / span 2;
    grid-row: span 2 / span 2;

    @media (max-width: 1368px) {
        grid-column-start: 1;
        grid-column-end: 2;

        grid-row-start: 5;
        grid-row-end: 7;
    }

    @media (max-width: 768px) {
        grid-column-start: 1;
        grid-column-end: 2;

        grid-row-start: 9;
        grid-row-end: 11;
    }
`

export const ChartWrapper_6 = styled.div`
    grid-column: span 2 / span 2;
    grid-column-start: 3;
    grid-row: span 2 / span 2;

    @media (max-width: 1368px) {
        grid-column-start: 2;
        grid-column-end: 3;

        grid-row-start: 5;
        grid-row-end: 7;
    }

    @media (max-width: 768px) {
        grid-column-start: 1;
        grid-column-end: 2;

        grid-row-start: 11;
        grid-row-end: 13;
    }
`

export const ChartWrapper_7 = styled.div`
    grid-row: span 2 / span 2;
    grid-row-start: 4;

    @media (max-width: 1368px) {
        grid-column-start: 1;
        grid-column-end: 2;

        grid-row-start: 7;
        grid-row-end: 9;
    }

    @media (max-width: 768px) {
        grid-column-start: 1;
        grid-column-end: 2;

        grid-row-start: 13;
        grid-row-end: 15;
    }
`

export const ChartWrapper_8 = styled.div`
    grid-row: span 2 / span 2;
    grid-row-start: 4;

    @media (max-width: 1368px) {
        grid-column-start: 2;
        grid-column-end: 3;

        grid-row-start: 7;
        grid-row-end: 9;
    }

    @media (max-width: 768px) {
        grid-column-start: 1;
        grid-column-end: 2;

        grid-row-start: 15;
        grid-row-end: 17;
    }
`

export const ChartWrapper_9 = styled.div`
    grid-column: span 2 / span 2;
    grid-row: span 2 / span 2;

    @media (max-width: 1368px) {
        grid-row-start: 9;
        grid-row-end: 11;
    }

    @media (max-width: 768px) {
        grid-column-start: 1;
        grid-column-end: 2;

        grid-row-start: 17;
        grid-row-end: 19;
    }
`








