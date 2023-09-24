import {styled} from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    background-color: #202024;
`

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;

    height: 100vh;
    max-width: 634px;
    margin: 0 auto;
`

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    padding: 2rem 2rem 0 0;
`

export const HeaderSection = styled.section``

export const HeaderLogo = styled.img`
    width: 100px;
    height: 100px;
`

export const HeaderTitle = styled.span`
    font-size: 1.5rem;
    font-weight: 700;
    color: #E1E1E6;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    width: 100%;

    padding: 4rem 2rem 0 2rem;
`

export const FormFieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 100%;
    margin-bottom: 2rem;

    border: none;
`

export const FormInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export const FormInputLabel = styled.label`
  color: #ffffff;
`

export const FormCheckboxSectionContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    margin-top: 2rem;
`

export const FormCheckboxWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`

export const FormCheckboxLabel = styled.label`
    color: #ffffff;
    font-size: 0.875rem;
    font-weight: 400;
`

export const FormCheckboxInput = styled.input`
    width: 1rem;
    height: 1rem;

    cursor: pointer;
`