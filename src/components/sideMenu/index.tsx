import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button'
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import { BarChart2, MenuIcon, MoreVertical, Search, Users, UserCog, LogOut } from 'lucide-react'
import Logo from '@/assets/logoVertical.svg'
import jwt_decode from "jwt-decode";
import { useNavigate, useLocation } from 'react-router-dom';

interface tokenDecoded {
    name: string;
    email: string;
    role: number;
}

export function SideBarMenu() {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeRoute, setActiveRoute] = useState('');

    // pegar dados do usuario logado
    const token = localStorage.getItem('token');
    const decoded = jwt_decode<tokenDecoded>(token as string);
    const splitName = decoded.name.split(' '); // Obtenha o primeiro nome
    const firstInitial = splitName[0].charAt(0); // Pegue a primeira letra do primeiro nome
    const secondInitial = splitName[1].toUpperCase().charAt(0); // Pegue a primeira letra do segundo nome
    
    const colors = [
        'bg-zinc-500',
        'bg-emerald-500',
        'bg-cyan-500',
        'bg-fuchsia-500',
        'bg-rose-500',
        'bg-orange-500',
        'bg-yellow-500',
        'bg-lime-500',
        'bg-teal-500',
        'bg-blue-500',
        'bg-indigo-500',
        'bg-violet-500',
        'bg-purple-500',
        'bg-pink-500',
        'bg-red-500',
        'bg-blueGray-500']
    const [color, setColor] = useState(colors[Math.floor(Math.random() * colors.length)])
    
    useEffect(() => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setColor(randomColor);
    }, [decoded, colors]);

    useEffect(() => {
        setActiveRoute(location.pathname); 
      }, [location]);

    // logout do usuario
    const handleLogout = () => {
        localStorage.clear()
        navigate('/')
    }

    const goToDashboard = () => {
        navigate('/dashboard')
    }

    const goToSearch = () => {
        navigate('/search')
    }

    const goToUsers = () => {
        navigate('/users')
    }

    return (
        <Sheet>
            <SheetTrigger>
                <Button className='bg-transparent p-3 hover:bg-zinc-700'>
                    <MenuIcon size={24} className='text-zinc-50' />
                </Button>
            </SheetTrigger>
            <SheetContent side={'left'} className='bg-zinc-800 w-80 text-zinc-50 border-zinc-700'>
                <SheetHeader>
                    <SheetTitle>
                        <img src={Logo} alt="Logo fordevs" className='w-8' />
                    </SheetTitle>
                </SheetHeader>

                <Separator className='mt-4 mb-4' />

                <div className="flex flex-col h-4/5 gap-2">
                    {decoded.role === 0 ? (
                        <>
                            <Button
                                data-active={activeRoute === '/dashboard'}
                                className='w-full h-12 px-2 items-center justify-start gap-2 bg-transparent hover:bg-zinc-700 data-[active="true"]:bg-zinc-700' 
                                onClick={goToDashboard}
                            >
                                <BarChart2 size={24} />
                                Dashboard
                            </Button>

                            <Button
                                data-active={activeRoute === '/search'}
                                className='w-full h-12 px-2 items-center justify-start gap-2 bg-transparent hover:bg-zinc-700 data-[active="true"]:bg-zinc-700'
                                onClick={goToSearch}
                            >
                                <Search size={24} />
                                Pesquisa
                            </Button>

                            <Button
                                data-active={activeRoute === '/users'}
                                className='w-full h-12 px-2 items-center justify-start gap-2 bg-transparent hover:bg-zinc-700 data-[active="true"]:bg-zinc-700'
                                onClick={goToUsers}
                            >
                                <Users size={24} />
                                Usuários
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button data-active={activeRoute === '/dashboard'} className="w-full h-12 px-2 items-center justify-start gap-2 bg-transparent hover:bg-zinc-700 data-[active='true']:bg-zinc-700" onClick={goToDashboard}>
                                <BarChart2 size={24} />
                                Dashboard
                            </Button>

                            <Button data-active={activeRoute === '/search'} className='w-full h-12 px-2 items-center justify-start gap-2 bg-transparent hover:bg-zinc-700 data-[active="true"]:bg-zinc-700' onClick={goToSearch}>
                                <Search size={24} />
                                Pesquisa
                            </Button>
                        </>
                    )}

                </div>

                <Separator />

                <div className='flex items-center justify-between h-1/6'>
                    <div>
                        <Avatar>
                            <AvatarFallback className={color}>
                                {firstInitial + secondInitial}
                            </AvatarFallback>
                        </Avatar>
                    </div>
                    <div>
                        <div className='font-bold text-lg whitespace-nowrap text-ellipsis overflow-hidden w-44'>{decoded.name}</div>
                        <div className='text-zinc-500'>
                            {decoded.role === 0 && 'Administrador' || decoded.role === 1 && 'Usuário Comum' || decoded.role === 2 && 'Pesquisador'}
                        </div>
                    </div>
                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <MoreVertical size={24} />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 bg-zinc-950 text-zinc-50 border-zinc-500" >
                                <DropdownMenuLabel>
                                    Configurações de Conta
                                </DropdownMenuLabel>

                                <DropdownMenuSeparator className='bg-zinc-500' />

                                <DropdownMenuGroup>
                                    <DropdownMenuItem className='hover:cursor-pointer'>
                                        Editar perfil
                                        <DropdownMenuShortcut>
                                            <UserCog size={16} />
                                        </DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>

                                <DropdownMenuSeparator className='bg-zinc-500' />

                                <DropdownMenuItem
                                    className='hover:cursor-pointer'
                                    onClick={handleLogout}
                                >
                                    Sair
                                    <DropdownMenuShortcut>
                                        <LogOut size={16} />
                                    </DropdownMenuShortcut>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>

            </SheetContent>
        </Sheet>
    )
}