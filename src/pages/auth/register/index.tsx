import { useState } from 'react';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
// import { Input } from '../../../components/input';
// import { Button } from '../../../components/Button';
import Logo from '../../../assets/logoVertical.svg'
import api from '../../../services/api.service';
import URI from '../../../utils/enum/uri.enum';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

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
  const { register, handleSubmit, formState: { errors } } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserSchema)
  })

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  function handleRegister(data: CreateUserFormData) {
    setLoading(true);

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
    }).finally(() => {
      setLoading(false);
    })
  }

  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='flex flex-col max-w-xl w-full h-3/4 px-8'>
        <header className='flex items-center justify-between'>
          <section>
            <img src={Logo} alt="logo fordevs" className='h-12 w-12' />
          </section>

          <section className='flex gap-2 items-center'>
            <div>
              <span className='text-2xl text-white font-bold'>Cadastro</span>
            </div>
          </section>
        </header>

        <main className='flex flex-col justify-center h-full'>
          <form onSubmit={handleSubmit(handleRegister)} className='flex flex-col'>
            <div className='flex flex-col gap-6 mb-16'>
              <div className='flex flex-col gap-1'>
                <div className='flex items-center justify-between'>
                  <label htmlFor="name" className='text-white'>Nome</label>
                  {errors.name && <span className='text-red-500 text-sm'>{errors.name.message}</span>}
                </div>
                <Input
                  type='text'
                  placeholder="Nome"
                  {...register('name')}

                  className='bg-zinc-950 text-white p-4 h-12 rounded-sm border-zinc-400 placeholder:text-zinc-500'
                />
              </div>

              <div className='flex flex-col gap-1'>
                <div className='flex items-center justify-between'>
                  <label htmlFor="email" className='text-white'>E-mail</label>
                  {errors.email && <span className='text-red-500 text-sm'>{errors.email.message}</span>}
                </div>
                <Input
                  type="email"
                  placeholder="E-mail"
                  {...register('email')}

                  className='bg-zinc-950 text-white p-4 h-12 rounded-sm border-zinc-400 placeholder:text-zinc-500'
                />
              </div>

              <div className='flex flex-col gap-1'>
                <div className='flex items-center justify-between'>
                  <label htmlFor="password" className='text-white'>Senha</label>
                  {errors.password && <span className='text-red-500 text-sm'>{errors.password.message}</span>}
                </div>
                <div className='flex items-center gap-1'>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Senha"
                    {...register('password')}
                    className='bg-zinc-950 text-white p-4 h-12 rounded-sm border-zinc-400 placeholder:text-zinc-500'
                  />
                  <Button
                    onClick={togglePasswordVisibility}
                    type='button'
                    className='bg-zinc-950 text-white p-4 h-12 rounded-sm border border-zinc-400 hover:bg-zinc-800'
                  >
                    {showPassword ? <Eye /> : <EyeOff />}
                  </Button>
                </div>
              </div>
            </div>

            <div>
              {loading ?
                <Button type='submit' disabled className='flex items-center gap-4 w-full p-4 h-12 bg-blue-800 hover:bg-blue-700 transition-all' >
                  <Loader2 className='animate-spin' />
                  Cadastrando
                </Button>
                :
                <Button type='submit' className='w-full p-4 h-12 bg-blue-800 hover:bg-blue-700 transition-all' >
                  Cadastrar
                </Button>
              }
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
