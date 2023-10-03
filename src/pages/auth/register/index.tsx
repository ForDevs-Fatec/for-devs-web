import { ChangeEvent, FormEvent, useState } from 'react';
import { AtSign, Eye, EyeOff, Lock, Unlock, User } from 'lucide-react';
import { Input } from '../../../components/input';
import { Button } from '../../../components/Button';
import Logo from '../../../assets/logoVertical.svg'
import api from '../../../services/api.service';
import URI from '../../../utils/enum/uri.enum';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container, MainContainer, HeaderContainer, HeaderSection, HeaderLogo, HeaderTitle, FormContainer, FormFieldset, FormInputWrapper, FormInputLabel, SpanError } from './styles'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const createUserSchema = z.object({
  name: z.string()
    .nonempty('Nome obrigatório para o cadastro !')
    .transform(value => {
      return value.trim().split(' ').map(word => {
        return word[0].toLocaleUpperCase().concat(word.substring(1))
      }).join(' ')
    }),
  email: z.string()
    .nonempty('Email obrigatório para o cadastro !')
    .email('Formato de e-mail inválido')
    .transform(value => value.toLowerCase()),
  password: z.string()
    .nonempty('Senha obrigatoria para o cadastro !')
    .min(6, 'Senha deve conter no mínimo 6 caracteres !'),
})

type CreateUserFormData = z.infer<typeof createUserSchema>

export function Register() {
  const { register, handleSubmit, formState: { errors }} = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserSchema)
  })

  const [showPass, setShowPass] = useState(false);

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

  const errorToastUserExist = () => toast.error("Usuário já cadastrado, verifique com o admin da sua área !", {
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

  function handleRegister(data: CreateUserFormData) {
    api.post(URI.USER_REGISTER, data).then(response => {
      if (response.status === 409) {
        errorToastUserExist();
      }

      if (response.status === 201) {
        navigate('/');
      }
    }).then(() => {
      success();
    }).catch(error => {
      if (error.response.status === 409) {
        errorToastUserExist();
      }

      if (error.response.status === 400) {
        errorToast();
      }
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

        <FormContainer onSubmit={handleSubmit(handleRegister)}>
          <FormFieldset>
            <FormInputWrapper>
              <FormInputLabel htmlFor="name">Nome</FormInputLabel>
              <Input.Root>
                <Input.IconLeft icon={User} />
                <Input.TextField
                  type='text'
                  placeholder="Nome"
                  {...register('name')}
                />
              </Input.Root>
              {errors.name && <SpanError>{errors.name.message}</SpanError>}
            </FormInputWrapper>

            <FormInputWrapper>
              <FormInputLabel htmlFor="email">E-mail</FormInputLabel>
              <Input.Root>
                <Input.IconLeft icon={AtSign} />
                <Input.TextField
                  type='email'
                  placeholder="Email"
                  {...register('email')}
                />
              </Input.Root>
              {errors.email && <SpanError>{errors.email.message}</SpanError>}
            </FormInputWrapper>

            <FormInputWrapper>
              <FormInputLabel htmlFor="password">Senha</FormInputLabel>
              <Input.Root>
                <Input.IconLeft icon={showPass ? Unlock : Lock} />
                <Input.TextField
                  placeholder="Senha"
                  type={showPass ? "text" : "password"}
                  {...register('password')}
                />
                <Input.ButtonIcon
                  type='button'
                  icon={showPass ? Eye : EyeOff}
                  onClick={toggleShowPass}
                />
              </Input.Root>
              {errors.password && <SpanError>{errors.password.message}</SpanError>}
            </FormInputWrapper>
          </FormFieldset>
          <Button.Root type='submit'>
            <Button.Content text="Cadastrar" />
          </Button.Root>
        </FormContainer>
      </MainContainer>
    </Container>
  );
}
