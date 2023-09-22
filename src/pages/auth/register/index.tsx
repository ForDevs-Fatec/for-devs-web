import { ChangeEvent, FormEvent, useState } from 'react';
import { AtSign, Eye, EyeOff, Lock, Unlock, User } from 'lucide-react';
import { Input } from '../../../components/input';
import { Button } from '../../../components/Button';
import Logo from '../../../assets/logoVertical.svg'
import api from '../../../services/api.service';
import URI from '../../../utils/enum/uri.enum';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  Container,
  MainContainer,
  HeaderContainer,
  HeaderSection,
  HeaderLogo,
  HeaderTitle,
  FormContainer,
  FormFieldset,
  FormInputWrapper,
  FormInputLabel,
  FormCheckboxSectionContainer,
  FormCheckboxWrapper,
  FormCheckboxLabel,
  FormCheckboxInput,
} from './styles'

export function Register() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const errorToast = () => toast.error("Informações incompletas!", {
    position: "top-center",
    autoClose: 5000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  const success = () => toast.success("Usuário criado com sucesso!", {
    position: "top-center",
    autoClose: 5000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  const toggleShowPass = () => {
    setShowPass(!showPass);
  };

  const getName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const getEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const handleCheckBoxValue = (event: ChangeEvent<HTMLInputElement>) => {
    setRole(event.target.value)
  }

  function handleRegister(event: FormEvent) {
    event.preventDefault();

    const data = {
      name,
      email,
      password,
      role: parseInt(role)
    };

    console.log(data);

    api.post(URI.USER_REGISTER, data).then(response => {
      if (response.status === 201) {
        navigate('/');
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
        <HeaderContainer>
          <HeaderSection>
            <HeaderLogo
              src={Logo}
              alt="ForDevs logo-marca"
            />
          </HeaderSection>
          <HeaderSection>
            <HeaderTitle>
              Cadastro
            </HeaderTitle>
          </HeaderSection>
        </HeaderContainer>

        <FormContainer onSubmit={handleRegister}>
          <FormFieldset>
            <FormInputWrapper>
              <FormInputLabel htmlFor="name">Nome</FormInputLabel>
              <Input.Root>
                <Input.IconLeft icon={User} />
                <Input.TextField
                  type='text'
                  placeholder="Nome"
                  value={name}
                  onChange={getName}
                />
              </Input.Root>
            </FormInputWrapper>

            <FormInputWrapper>
              <FormInputLabel htmlFor="email">E-mail</FormInputLabel>
              <Input.Root>
                <Input.IconLeft icon={AtSign} />
                <Input.TextField
                  type='email'
                  placeholder="Email"
                  value={email}
                  onChange={getEmail}
                />
              </Input.Root>
            </FormInputWrapper>

            <FormInputWrapper>
              <FormInputLabel htmlFor="password">Senha</FormInputLabel>
              <Input.Root>
                <Input.IconLeft icon={showPass ? Unlock : Lock} />
                <Input.TextField
                  value={password}
                  placeholder="Senha"
                  onChange={e => setPassword(e.target.value)}
                  type={showPass ? "text" : "password"}
                />
                <Input.ButtonIcon
                  type='button'
                  icon={showPass ? Eye : EyeOff}
                  onClick={toggleShowPass}
                />
              </Input.Root>
            </FormInputWrapper>

            <FormCheckboxSectionContainer>
              <FormCheckboxWrapper>
                <FormCheckboxInput
                  type="checkbox"
                  name="admin"
                  id="admin"
                  value={0}
                  onChange={handleCheckBoxValue}
                />
                <FormCheckboxLabel>
                  Admin
                </FormCheckboxLabel>
              </FormCheckboxWrapper>
              <FormCheckboxWrapper>
                <FormCheckboxInput
                  type="checkbox"
                  name="nivel1"
                  id="nivel1"
                  value={1}
                  onChange={handleCheckBoxValue}
                />
                <FormCheckboxLabel>
                  Nivel 1
                </FormCheckboxLabel>
              </FormCheckboxWrapper>
              <FormCheckboxWrapper>
                <FormCheckboxInput
                  type="checkbox"
                  name="nivel2"
                  id="nivel2"
                  value={2}
                  onChange={handleCheckBoxValue}
                />
                <FormCheckboxLabel>
                  Nivel 2
                </FormCheckboxLabel>
              </FormCheckboxWrapper>
            </FormCheckboxSectionContainer>
          </FormFieldset>
          <Button.Root type='submit'>
            <Button.Content text="Cadastrar" />
          </Button.Root>
        </FormContainer>
      </MainContainer>
    </Container>
  );
}
