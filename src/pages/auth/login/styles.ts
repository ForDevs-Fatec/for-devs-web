import { styled } from 'styled-components'

export const Container = styled.div`
    height: 100vh;
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
  color: ${({theme}) => theme.colors.blue_300};
  font-weight: ${({theme}) => theme.fontWeights.bold};
  font-size: ${({theme}) => theme.fontSizes.large};
`

export const HeaderTitleWhite = styled.span`
  color: ${({theme}) => theme.colors.white};
  font-weight: ${({theme}) => theme.fontWeights.bold};
  font-size: ${({theme}) => theme.fontSizes.large};
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
  color: ${({theme}) => theme.colors.white};
  font-weight: ${({theme}) => theme.fontWeights.regular};
  font-size: ${({theme}) => theme.fontSizes.xx_large};
`

export const MainFormSubtitle = styled.p`
  color: ${({theme}) => theme.colors.grey_300};
  font-weight: ${({theme}) => theme.fontWeights.regular};
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
  color: ${({theme}) => theme.colors.white};
  font-weight: 400;
`

export const FooterContainer = styled.footer`
  display: flex;
  
  width: 100%;
  padding: 0 2rem 0 2rem;
`

export const FooterSpan = styled.span`
  width: 100%;
  padding: 1rem 0 0 0;
  border-top: 2px solid ${({theme}) => theme.colors.grey_300};

  color: ${({theme}) => theme.colors.grey_300};
`

export const FooterLink = styled.a`
  font-weight: ${({theme}) => theme.fontWeights.bold};
  margin-left: 0.25rem;
  color: ${({theme}) => theme.colors.blue_300};

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export const SpanError = styled.span`
  color: ${({theme}) => theme.colors.red_error};
`