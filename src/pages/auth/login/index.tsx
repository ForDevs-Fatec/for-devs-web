import { useState } from 'react'
import { Eye, EyeOff, LogIn, Loader2 } from 'lucide-react'
import Logo from '@/assets/logo.svg'
import api from '../../../services/api.service'
import URI from '../../../utils/enum/uri.enum'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from "@/components/ui/separator"

const loginUserSchema = z.object({
  email: z.string()
    .nonempty('Email obrigatório para o login !')
    .email('Formato de e-mail inválido')
    .transform(value => value.toLowerCase()),
  password: z.string()
    .nonempty('Senha obrigatoria para o login !'),
})

type LoginUserFormData = z.infer<typeof loginUserSchema>

export function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginUserFormData>({
    resolver: zodResolver(loginUserSchema)
  })

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  function handleLoginSubmit(data: LoginUserFormData) {
    setLoading(true);

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
    }).finally(() => {
      setLoading(false);
    })
  }

  return (
    // <div className='flex h-screen items-center justify-center'>
    //   <div className='flex flex-col justify-between max-w-xl w-full h-3/4 px-8'>

    //     <header className='flex items-center justify-between'>
    //       <section>
    //         <img src={Logo} alt="logo fordevs" className='h-12 w-12' />
    //       </section>

    //       <section className='flex gap-2 items-center'>
    //         <div>
    //           <span className='text-2xl text-white font-bold'>Entrar</span>
    //         </div>
    //         <LogIn color='white' />
    //       </section>
    //     </header>

    //     <main className='flex flex-col gap-16'>
    //       <div className='flex flex-col gap-1'>
    //         <h1 className='text-4xl text-white'>Bem vindo !</h1>
    //         <p className='text-zinc-400'> Para acessar a plataforma, faça o login.</p>
    //       </div>

    //       <form onSubmit={handleSubmit(handleLoginSubmit)} className='flex flex-col'>
    //         <div className='flex flex-col gap-6 mb-16'>
    //           <div className='flex flex-col gap-1'>
    //             <div className='flex items-center justify-between'>
    //               <label htmlFor="email" className='text-white'>E-mail</label>
    //               {errors.email && <span className='text-red-500 text-sm'>{errors.email.message}</span>}
    //             </div>
    //             <Input
    //               type="email"
    //               placeholder="E-mail"
    //               autoComplete="username"
    //               {...register('email')}

    //               className='bg-zinc-950 text-white p-4 h-12 rounded-sm border-zinc-400 placeholder:text-zinc-500'
    //             />
    //           </div>

    //           <div className='flex flex-col gap-1'>
    //             <div className='flex items-center justify-between'>
    //               <label htmlFor="password" className='text-white'>Senha</label>
    //               {errors.password && <span className='text-red-500 text-sm'>{errors.password.message}</span>}
    //             </div>
    //             <div className='flex items-center gap-1'>
    //               <Input
    //                 type={showPassword ? 'text' : 'password'}
    //                 placeholder="Senha"
    //                 {...register('password')}
    //                 className='bg-zinc-950 text-white p-4 h-12 rounded-sm border-zinc-400 placeholder:text-zinc-500'
    //               />
    //               <Button
    //                 onClick={togglePasswordVisibility}
    //                 type='button'
    //                 className='bg-zinc-950 text-white p-4 h-12 rounded-sm border border-zinc-400 hover:bg-zinc-800'
    //               >
    //                 {showPassword ? <Eye /> : <EyeOff />}
    //               </Button>
    //             </div>
    //           </div>
    //         </div>

    //         <div>
    //           {loading ?
    //             <Button type='submit' disabled className='flex items-center gap-4 w-full p-4 h-12 bg-blue-800 hover:bg-blue-700 transition-all' >
    //               <Loader2 className='animate-spin' />
    //               Acessando
    //             </Button>
    //             :
    //             <Button type='submit' className='w-full p-4 h-12 bg-blue-800 hover:bg-blue-700 transition-all' >
    //               Acessar
    //             </Button>
    //           }
    //         </div>
    //       </form>
    //     </main>

    //     <div className='flex flex-col gap-8'>
    //       <Separator />
    //       <footer className='flex flex-col items-center'>
    //         <span className='text-zinc-300 font-bold'>
    //           Não possui conta?
    //         </span>

    //         <span className='w-96 text-center text-zinc-500'>
    //           Entre em contato com o administrador do sistema para criar uma conta.
    //         </span>
    //       </footer>
    //     </div>
    //   </div >
    // </div >
    <>
      <div className='px-5 h-screen'>
        <header className='flex items-center gap-2 h-16'>
          <img src={Logo} alt="logo fordevs" className='h-7 w-7' />
          <span className='text-lg text-white font-medium'>
            For
            <span className='text-blue-500'>Devs</span>
          </span>
        </header>

        <main className='flex items-center justify-center w-full'>
          <section className='flex flex-col justify-center gap-7 h-[656px] w-[680px] max-h-full max-w-full rounded-md bg-[#282828] py-6 px-12'>
            <header className='flex flex-col items-center'>
              <h1 className='text-white text-lg font-medium'>
                Entrar
              </h1>
              <span className='text-zinc-500'>
                Para acessar a plataforma, faça o login.
              </span>
            </header>

            <Separator />

            <form onSubmit={handleSubmit(handleLoginSubmit)} className='flex flex-col gap-7'>
              <div className='flex flex-col gap-1'>
                <div className='flex items-center justify-between'>
                  <label htmlFor="email" className='text-white'>E-mail</label>
                  {errors.email && <span className='text-red-500 text-sm'>{errors.email.message}</span>}
                </div>
                <Input
                  type="email"
                  placeholder="E-mail"
                  autoComplete="username"
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

              {loading ?
                <Button type='submit' disabled className='flex items-center gap-4 w-full p-4 h-12 bg-blue-800 hover:bg-blue-700 transition-all' >
                  <Loader2 className='animate-spin' />
                  Acessando
                </Button>
                :
                <Button type='submit' className='w-full p-4 h-12 bg-blue-800 hover:bg-blue-700 transition-all' >
                  Acessar
                </Button>
              }
            </form>

            <Separator className='bg-zinc-500'/>
            
            <footer className='flex flex-col items-center h-16'>
              <span className='text-zinc-300 font-bold text-sm'>
                Não possui conta?
              </span>

              <span className='text-center text-zinc-500 text-sm'>
                Entre em contato com o administrador do sistema para criar uma conta.
              </span>
            </footer>
          </section>
        </main>
      </div>
      
      <footer className='flex items-center justify-center'>
        <span className='text-zinc-300 font-bold'>
          © 2023 ForDevs. All rights reserved.
        </span>
      </footer>
    </>
  );
}