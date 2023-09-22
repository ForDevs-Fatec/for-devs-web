import { ChangeEvent, FormEvent, useState } from 'react'
import { Eye, EyeOff, Lock, LogIn, Mail, Unlock } from 'lucide-react'
import Logo from '../../../assets/logoVertical.svg'
import { Input } from '../../../components/input'
import { Button } from '../../../components/Button'
import api from '../../../services/api.service'
import URI from '../../../utils/enum/uri.enum'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

import {
  Container,
  MainContainer, 
  HeaderContainer, 
  LogoImg, 
  HeaderContentWrapper, 
  HeaderContentDiv, 
  HeaderTitleBlue, 
  HeaderTitleWhite, 
  MainFormContainer, 
  MainFormTitleSection, 
  MainFormTitle, 
  MainFormSubtitle, 
  MainForm, 
  MainFormInputWrapper, 
  MainFormInputTitle, 
  ForgotPasswordSection, 
  ForgotPasswordLink, 
  FooterContainer, 
  FooterSpan, 
  FooterLink
} from './styles'

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const errorToast = () => toast.error("Usuário ou senha inválidos!", {
    position: "top-center",
    autoClose: 5000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

 const success = () => toast.success("Login realizado com sucesso!", {
    position: "top-center",
    autoClose: 5000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  const navigate = useNavigate();

  // Função para alternar entre mostrar e esconder a senha
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };


  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      email,
      password
    };

    api.post(URI.USER_LOGIN, data).then(response => {
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token)
        console.log(response.data.token)
        navigate('/dashboard');
      }
    }).then(() => {
      success();
    }).catch(error => {
      errorToast();
      console.log(error)
    })
  }

  return (
    <Container>
      <MainContainer>
        {/* Header */}
        <HeaderContainer>
          <LogoImg src={Logo} alt="Fordevs logo-marca" />
          <HeaderContentWrapper>
            <HeaderContentDiv>
              <HeaderTitleBlue>Log</HeaderTitleBlue>
              <HeaderTitleWhite>in</HeaderTitleWhite>
            </HeaderContentDiv>
            <LogIn size={24} color="#E1E1E6" />
          </HeaderContentWrapper>
        </HeaderContainer>

        {/* Main */}
        <MainFormContainer>
          <MainFormTitleSection>
            <MainFormTitle>Bem vindo !</MainFormTitle>
            <MainFormSubtitle>Para acessar a plataforma, faça seu login.</MainFormSubtitle>
          </MainFormTitleSection>

          <MainForm onSubmit={handleSubmit}>
            <MainFormInputWrapper>
              <MainFormInputTitle>E-mail</MainFormInputTitle>
              <Input.Root>
                <Input.IconLeft icon={Mail} />
                <Input.TextField
                  type="email"
                  placeholder="E-mail"
                  autoComplete="username"
                  value={email}
                  onChange={handleEmailChange}
                />
              </Input.Root>
            </MainFormInputWrapper>

            <MainFormInputWrapper>
              <MainFormInputTitle>Senha</MainFormInputTitle>
              <Input.Root>
                <Input.IconLeft icon={showPassword ? Unlock : Lock} />
                <Input.TextField
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Senha"
                  autoComplete="current-password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <Input.ButtonIcon
                  icon={showPassword ? Eye : EyeOff}
                  onClick={togglePasswordVisibility}
                  type='button'
                />
              </Input.Root>
            </MainFormInputWrapper>

            <Button.Root type='submit'>
              <Button.Content text="Acessar" />
            </Button.Root>
          </MainForm>

          <ForgotPasswordSection>
              <ForgotPasswordLink>Esqueceu sua senha ?</ForgotPasswordLink>
          </ForgotPasswordSection>
        </MainFormContainer>

        {/* Footer */}
        <FooterContainer>
          <FooterSpan>
            Não possui conta?
            <FooterLink href="/register">Cadastre-se</FooterLink>
          </FooterSpan>
        </FooterContainer>
      </MainContainer>
    </Container>
  );
}
