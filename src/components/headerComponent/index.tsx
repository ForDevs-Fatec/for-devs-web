import { SideBarMenu } from "../sideMenu"
import { useLocation, useNavigate } from "react-router-dom"
import { BarChart3, Users, Search, Eye, EyeOff, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { useState } from "react"
import api from "@/services/api.service"
import URI from "@/utils/enum/uri.enum"
import { toast } from "react-toastify"
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const userRoleSchema = z.string()
    .nonempty('Nível do usuário obrigatório para o cadastro !')
    .refine(value => ['1', '2', '3'].includes(value), {
        message: 'Nível do usuário inválido'
    });

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
    userRole: userRoleSchema
})

type CreateUserFormData = z.infer<typeof createUserSchema>

export function HeaderComponent() {
    const { register, handleSubmit, formState: { errors } } = useForm<CreateUserFormData>({
        resolver: zodResolver(createUserSchema)
    })
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation()
    const path = location.pathname
    let pageTitle
    let pageSubtitle
    let pageIcon

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

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

    switch (path) {
        case '/dashboard':
            pageTitle = 'Dashboard'
            pageSubtitle = 'Dashboard'
            pageIcon = <BarChart3 className='w-5 h-5 text-zinc-50' />
            break;
        case '/users':
            pageTitle = 'Usuários'
            pageSubtitle = 'Usuários'
            pageIcon = <Users className='w-5 h-5 text-zinc-50' />
            break;
        case '/search':
            pageTitle = 'Pesquisa'
            pageSubtitle = 'Pesquisa'
            pageIcon = <Search className='w-5 h-5 text-zinc-50' />
            break;
        case '/metrics':
            pageTitle = 'Métricas'
            pageSubtitle = 'Métricas'
            pageIcon = <TrendingUp className='w-5 h-5 text-zinc-50' />
            break;
    }

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
        <div className='flex items-center gap-8'>
            <SideBarMenu />

            <div className='w-full'>
                {location.pathname === '/users' ?
                    (
                        <div className='flex items-center justify-between'>
                            <div>
                                <div>
                                    <span className='text-zinc-500 text-sm'>
                                        Pages /
                                        <span className='text-zinc-50 ml-1'>
                                            {pageSubtitle}
                                        </span>
                                    </span>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    {pageIcon}
                                    <h1 className='font-bold text-lg text-zinc-50'>{pageTitle}</h1>
                                </div>
                            </div>

                            <div>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button className='flex items-center justify-start py-2 px-4 h-full w-full bg-blue-800'>Novo usuário</Button>
                                    </DialogTrigger>
                                    <DialogContent className=" text-zinc-50">
                                        <DialogHeader>
                                            <DialogTitle>Novo usuário</DialogTitle>
                                            <DialogDescription className='text-zinc-500'>
                                                Crie um novo usuário. Por favor preencha todos os campos para que o usuário seja criado com sucesso.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <form onSubmit={handleSubmit(handleRegister)}>
                                            <div className="flex flex-col gap-4">
                                                <div className="flex flex-col gap-2">
                                                    <Label htmlFor="name">
                                                        Nome
                                                    </Label>
                                                    {errors.name && <span className='text-red-500 text-sm'>{errors.name.message}</span>}
                                                    <Input
                                                        id="name"
                                                        placeholder='Nome'
                                                        className='bg-zinc-950 text-white p-4 h-12 rounded-sm border-zinc-400 placeholder:text-zinc-500'
                                                        {...register('name')}
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <Label htmlFor="email">
                                                        E-mail
                                                    </Label>
                                                    {errors.email && <span className='text-red-500 text-sm'>{errors.email.message}</span>}
                                                    <Input
                                                        id="email"
                                                        placeholder='E-mail'
                                                        className='bg-zinc-950 text-white p-4 h-12 rounded-sm border-zinc-400 placeholder:text-zinc-500'
                                                        {...register('email')}
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <Label htmlFor="password">
                                                        Senha
                                                    </Label>
                                                    {errors.password && <span className='text-red-500 text-sm'>{errors.password.message}</span>}
                                                    <div className='flex items-center gap-1'>
                                                        <Input
                                                            type={showPassword ? 'text' : 'password'}
                                                            placeholder="Senha"
                                                            className='bg-zinc-950 text-white p-4 h-12 rounded-sm border-zinc-400 placeholder:text-zinc-500'
                                                            {...register('password')}
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
                                                <div className="flex flex-col gap-2">
                                                    <Label htmlFor="userRole">
                                                        Nivel do usuário
                                                    </Label>
                                                    {errors.userRole && <span className='text-red-500 text-sm'>{errors.userRole.message}</span>}
                                                    <Select

                                                        {...register('userRole')}
                                                    >
                                                        <SelectTrigger className='bg-zinc-950 text-white p-4 h-12 rounded-sm border-zinc-400 placeholder:text-zinc-500'>
                                                            <SelectValue placeholder='Niveis de acesso' />
                                                        </SelectTrigger>
                                                        <SelectContent className='bg-zinc-950' >
                                                            <SelectItem value="1" className='text-zinc-50 cursor-pointer'>Administrador</SelectItem>
                                                            <SelectItem value="2" className='text-zinc-50 cursor-pointer'>Nivel 1</SelectItem>
                                                            <SelectItem value="3" className='text-zinc-50 cursor-pointer'>Nivel 2</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>

                                                <DialogFooter>
                                                    <Button type="submit">Salvar Mudanças</Button>
                                                </DialogFooter>
                                            </div>
                                        </form>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </div>
                    )
                    :
                    (
                        <>
                            <div>
                                <span className='text-zinc-500 text-sm'>
                                    Pages /
                                    <span className='text-zinc-50 ml-1'>
                                        {pageSubtitle}
                                    </span>
                                </span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                {pageIcon}
                                <h1 className='font-bold text-lg text-zinc-50'>{pageTitle}</h1>
                            </div>
                        </>
                    )
                }

            </div>
        </div>
    )
}