import { styled } from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    background-color: #202024;
`

export const MainContainer = styled.div`
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

  padding: 2rem 2rem 0 0;
`

export const LogoImg = styled.img`
  width: 100px;
  height: 100px;
`

export const HeaderContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const HeaderContentDiv = styled.div``

export const HeaderTitleBlue = styled.span`
  color: #00b4f1;
  font-weight: 700;
  font-size: 1.5rem;
`

export const HeaderTitleWhite = styled.span`
  color: #e1e1e6;
  font-weight: 700;
  font-size: 1.5rem;
`

export const MainFormContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3.25rem;

  padding: 6rem 2rem 6.5rem 2rem;
`

export const MainFormTitleSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const MainFormTitle = styled.h1`
  color: #e1e1e6;
  font-weight: 400;
  font-size: 2rem;
`

export const MainFormSubtitle = styled.p`
  color: #c4c4cc;
  font-weight: 400;
`

export const MainForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const MainFormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const MainFormInputTitle = styled.label`
  color: #fff;
  font-weight: 400;
`

export const ForgotPasswordSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ForgotPasswordLink = styled.a`
  color: #00b4f1;
  font-weight: 400;

  cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`

export const FooterContainer = styled.footer`
  display: flex;
  
  width: 100%;
  padding: 0 2rem 0 2rem;
`

export const FooterSpan = styled.span`
  width: 100%;
  padding: 1rem 0 0 0;
  border-top: 2px solid #c4c4cc;

  color: #C4C4CC;
`

export const FooterLink = styled.a`
  font-weight: 700;
  margin-left: 0.25rem;
  color: #00b4f1;

  cursor: pointer;
`