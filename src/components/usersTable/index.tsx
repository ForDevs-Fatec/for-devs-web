import { useEffect, useState } from 'react'
import api from '../../services/api.service'
import URI from '../../utils/enum/uri.enum'

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { ChevronLeft, ChevronRight, Loader2, MoreVertical } from 'lucide-react'

type UserData = {
    id: number;
    name: string;
    email: string;
    role: number;
}

export function UserTable() {
    const [users, setUsers] = useState<UserData[]>([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);
    const token = 'Bearer ' + localStorage.getItem('token')

    function handleGetUsers() {
        setLoading(true);
        setTimeout(() => {
            api.get<UserData[]>(URI.USER, {
                headers: {
                    Authorization: token
                }
            }).then((response) => {
                setUsers(response.data);
                setLoading(false);
            }).catch((error) => {
                console.log(error);
                setLoading(false);
            });
        }, 500);
    }

    useEffect(() => {
        handleGetUsers()
    }, [])

    const handleDeleteUser = (userId: any) => {
        api.delete(URI.USER_DELETE + '/' + userId, {
            headers: {
                Authorization: token
            }
        }).then((response) => {
            console.log(response);
            handleGetUsers()
        }).catch((error) => {
            console.log(error);
        });
    }

    const mapRoleToLabel = (role: number): string => {
        switch (role) {
            case 0:
                return 'Administrador';
            case 1:
                return 'Nível 1';
            case 2:
                return 'Nível 2';
            default:
                return 'Desconhecido';
        }
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(users.length / itemsPerPage);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const handleLastPage = () => {
        const totalPages = Math.ceil(users.length / itemsPerPage);
        setCurrentPage(totalPages);
    };

    return (
        <div>
            {loading ?
                (
                    <div className="flex items-center justify-center h-full w-full">
                        <Loader2 className='animate-spin text-zinc-50' />
                        <p className='text-zinc-50 ml-2'>Carregando usuários...</p>
                    </div>
                )
                :
                (
                    <div className='border p-2 rounded-sm  shadow-2xl'>
                        <Table className='h-[700px]'>
                            <TableCaption>
                                <div className="flex justify-between mt-4">
                                    <div className="flex justify-center mt-4">
                                        <span className="text-zinc-50 font-bold">
                                            {currentPage} de {totalPages} páginas
                                        </span>
                                    </div>
                                    <div className='flex gap-2'>
                                        <Button
                                            onClick={handlePrevPage}
                                            disabled={currentPage === 1}
                                            className='flex items-center gap-1 p-2 bg-blue-800 hover:bg-blue-700 transition-all'
                                        >
                                            <ChevronLeft />
                                        </Button>
                                        <Button
                                            onClick={handleLastPage}
                                            className='flex items-center gap-1 p-2 bg-blue-800 hover:bg-blue-700 transition-all'
                                        >
                                            Ultima página
                                        </Button>
                                        <Button
                                            onClick={handleNextPage}
                                            disabled={currentPage * itemsPerPage >= users.length}
                                            className='flex items-center justify-between gap-1 p-2 bg-blue-800 hover:bg-blue-700 transition-all'
                                        >
                                            <ChevronRight />
                                        </Button>
                                    </div>
                                </div>
                            </TableCaption>
                            <TableHeader >
                                <TableRow className='bg-zinc-800 hover:bg-zinc-800'>
                                    <TableHead className='text-left w-[250px] font-bold text-zinc-50'>Nome</TableHead>
                                    <TableHead className='text-center font-bold text-zinc-50'>E-mail</TableHead>
                                    <TableHead className="text-right font-bold text-zinc-50">Editar</TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {currentItems.map((item: UserData, index) => (
                                    <TableRow key={index} className='hover:bg-transparent'>
                                        <TableCell className='text-left text-zinc-50 font-bold'>{item.name}</TableCell>
                                        <TableCell className='text-center text-zinc-50'>{item.email}</TableCell>
                                        <TableCell className='text-right text-zinc-50'>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger className="p-2 rounded-md transition-all hover:bg-zinc-700">
                                                    <MoreVertical size={24} />
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent className='bg-neutral-800'>
                                                    <DropdownMenuLabel className='text-zinc-50'>Editar usuário</DropdownMenuLabel>
                                                    <DropdownMenuSeparator />
                                                    <Dialog>
                                                        <DialogTrigger asChild>
                                                            <Button className='flex items-center justify-start py-2 px-4 h-full w-full bg-transparent hover:bg-zinc-50 text-zinc-50 font-normal hover:text-zinc-950'>Editar perfil</Button>
                                                        </DialogTrigger>
                                                        <DialogContent className="sm:max-w-[425px] text-zinc-50">
                                                            <DialogHeader>
                                                                <DialogTitle>Editar perfil</DialogTitle>
                                                                <DialogDescription className='text-zinc-500'>
                                                                    Faça mudanças no perfil aqui. Clique em salvar quando finalizar.
                                                                </DialogDescription>
                                                            </DialogHeader>
                                                            <div className="grid gap-4 py-4">
                                                                <div className="grid grid-cols-4 items-center gap-4">
                                                                    <Label htmlFor="name" className="text-right">
                                                                        Nome
                                                                    </Label>
                                                                    <Input id="name" placeholder={item.name} className="col-span-3 placeholder:text-zinc-50" />
                                                                </div>
                                                                <div className="grid grid-cols-4 items-center gap-4">
                                                                    <Label htmlFor="email" className="text-right">
                                                                        E-mail
                                                                    </Label>
                                                                    <Input
                                                                        id="email"
                                                                        placeholder={item.email}
                                                                        className="col-span-3 placeholder:text-zinc-50"
                                                                    />
                                                                </div>
                                                                <div className="grid grid-cols-4 items-center gap-4">
                                                                    <Label htmlFor="email" className="text-right">
                                                                        Nivel do usuário
                                                                    </Label>
                                                                    <Select>
                                                                        <SelectTrigger className="col-span-3">
                                                                            <SelectValue placeholder={mapRoleToLabel(item.role)} />
                                                                        </SelectTrigger>
                                                                        <SelectContent className='bg-zinc-950'>
                                                                            <SelectItem value="1" className='text-zinc-50 cursor-pointer'>Administrador</SelectItem>
                                                                            <SelectItem value="2" className='text-zinc-50 cursor-pointer'>Nivel 1</SelectItem>
                                                                            <SelectItem value="3" className='text-zinc-50 cursor-pointer'>Nivel 2</SelectItem>
                                                                        </SelectContent>
                                                                    </Select>
                                                                </div>
                                                            </div>
                                                            <DialogFooter>
                                                                <Button type="submit">Salvar Mudanças</Button>
                                                            </DialogFooter>
                                                        </DialogContent>
                                                    </Dialog>

                                                    <Dialog>
                                                        <DialogTrigger asChild>
                                                            <Button className='flex items-center justify-start py-2 px-4 h-full w-full bg-transparent hover:bg-red-600 text-zinc-50 font-normal hover:text-zinc-50'>Excluir perfil</Button>
                                                        </DialogTrigger>
                                                        <DialogContent className="sm:max-w-[425px] text-zinc-50">
                                                            <DialogHeader>
                                                                <DialogTitle>Excluir perfil</DialogTitle>
                                                                <DialogDescription className='text-zinc-500'>
                                                                    Confirme sua decisão de excluir o perfil.
                                                                </DialogDescription>
                                                            </DialogHeader>
                                                            <div className="grid gap-4 py-4">
                                                                <div className="grid grid-cols-4 items-center gap-4">
                                                                    <Label htmlFor="name" className="text-right">
                                                                        Nome
                                                                    </Label>
                                                                    <Input id="name" value={item.name} className="col-span-3" disabled />
                                                                </div>
                                                                <div className="grid grid-cols-4 items-center gap-4">
                                                                    <Label htmlFor="email" className="text-right">
                                                                        E-mail
                                                                    </Label>
                                                                    <Input id="email" value={item.email} className="col-span-3" disabled />
                                                                </div>
                                                            </div>
                                                            <Button
                                                                type="button"
                                                                className='bg-red-600 hover:bg-red-700'
                                                                onClick={() => handleDeleteUser(item.id)}
                                                            >
                                                                Excluir perfil
                                                            </Button>
                                                            <Button
                                                                type="button"
                                                                onClick={() => handleGetUsers()}
                                                            >
                                                                Cancelar
                                                            </Button>
                                                        </DialogContent>
                                                    </Dialog>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                )}
        </div>
    )
}