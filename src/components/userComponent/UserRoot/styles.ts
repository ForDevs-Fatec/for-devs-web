import { styled } from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    padding: 1.5rem;

    background-color: ${({ theme }) => theme.colors.grey_background};

    border-radius: 0.5rem;

`