import { useEffect, useState } from "react";
import api from "../../services/api.service";
import URI from "../../utils/enum/uri.enum";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight, Loader2, MoreVertical } from "lucide-react";

type UserData = {
  id: number;
  name: string;
  email: string;
  role: number;
};

export function UserTable() {
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const token = "Bearer " + localStorage.getItem("token");

  function handleGetUsers() {
    setLoading(true);
    setTimeout(() => {
      api
        .get<UserData[]>(URI.USER, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          setUsers(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }, 500);
  }

  useEffect(() => {
    handleGetUsers();
  }, []);

  function handleUpdateUser(event: React.FormEvent, userId: number) {
    event.preventDefault();

    // Obtenha os novos dados do usuário do formulário
    const formData = new FormData(event.target as HTMLFormElement);
    const name = formData.get("name");
    const email = formData.get("email");
    const role = formData.get("role");

    setLoading(true);
    setTimeout(() => {
      api
        .put(
          `${URI.USER_UPDATE}/${userId}`,
          {
            name,
            email,
            role,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((response) => {
            console.log(email)
          console.log(response);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }, 1000);
  }

  const handleDeleteUser = (userId: any) => {
    api
      .delete(URI.USER_DELETE + "/" + userId, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log(response);
        handleGetUsers();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const mapRoleToLabel = (role: number): string => {
    switch (role) {
      case 0:
        return "Administrador";
      case 1:
        return "Nível 1";
      case 2:
        return "Nível 2";
      default:
        return "Desconhecido";
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
  
  const [email, setEmail] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-full w-full">
          <Loader2 className="animate-spin text-white" />
          <p className="text-white ml-2">Carregando usuários...</p>
        </div>
      ) : (
        <div className="border p-2 rounded-sm shadow-2xl">
          <Table className="h-[700px]">
            <TableCaption>
              <div className="flex justify-between mt-4">
                <div className="flex justify-center mt-4">
                  <span className="text-muted-foreground font-bold">
                    {currentPage} de {totalPages} páginas
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className="flex items-center gap-1 p-2 text-secondary hover:text-foreground bg-primary hover:bg-primary-foreground transition-all"
                  >
                    <ChevronLeft />
                  </Button>
                  <Button
                    onClick={handleLastPage}
                    className="flex items-center gap-1 p-2 text-secondary hover:text-foreground bg-primary hover:bg-primary-foreground transition-all"
                  >
                    Ultima página
                  </Button>
                  <Button
                    onClick={handleNextPage}
                    disabled={currentPage * itemsPerPage >= users.length}
                    className="flex items-center justify-between gap-1 p-2 text-secondary hover:text-foreground bg-primary hover:bg-primary-foreground transition-all"
                  >
                    <ChevronRight />
                  </Button>
                </div>
              </div>
            </TableCaption>
            <TableHeader>
              <TableRow className="bg-primary-foreground">
                <TableHead className="text-left w-[250px] font-bold text-white">
                  Nome
                </TableHead>
                <TableHead className="text-center font-bold text-white">
                  E-mail
                </TableHead>
                <TableHead className="text-right font-bold text-white">
                  Editar
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {currentItems.map((item: UserData, index) => (
                <TableRow key={index} className="hover:bg-transparent">
                  <TableCell className="text-left text-white font-bold">
                    {item.name}
                  </TableCell>
                  <TableCell className="text-center text-white">
                    {item.email}
                  </TableCell>
                  <TableCell className="text-right text-white">
                    <DropdownMenu>
                      <DropdownMenuTrigger className="p-2 rounded-md transition-all hover:bg-primary-foreground">
                        <MoreVertical size={24} />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-primary-foreground">
                        {/* <DropdownMenuLabel className="text-white">
                          Editar usuário
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator /> */}
                        {/* <Dialog>
                          <DialogTrigger asChild>
                            <Button className="flex items-center justify-start py-2 px-4 h-full w-full bg-transparent hover:bg-zinc-50 text-white font-normal hover:text-zinc-950">
                              Editar perfil
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px] text-white">
                            <DialogHeader>
                              <DialogTitle>Editar perfil</DialogTitle>
                              <DialogDescription className="text-white0">
                                Faça mudanças no perfil aqui. Clique em salvar
                                quando finalizar.
                              </DialogDescription>
                            </DialogHeader>
                            <form
                              onSubmit={(event) =>
                                handleUpdateUser(event, item.id)
                              }
                            >
                              <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label htmlFor="name" className="text-right">
                                    Nome
                                  </Label>
                                  <Input
                                    id="name"
                                    name="name"
                                    defaultValue={item.name}
                                    className="col-span-3 placeholder:text-white"
                                  />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label htmlFor="email" className="text-right">
                                    E-mail
                                  </Label>
                                  <Input
                                    id="email"
                                    name="email"
                                    defaultValue={item.email}
                                    onChange={handleEmailChange}
                                    className="col-span-3 placeholder:text-white"
                                  />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label htmlFor="role" className="text-right">
                                    Nível do usuário
                                  </Label>
                                  <Select name="role" defaultValue={item.role ? item.role.toString() : ""}>
                                    <SelectTrigger className="col-span-3">
                                      <SelectValue
                                        placeholder={mapRoleToLabel(item.role)}
                                      />
                                    </SelectTrigger>
                                    <SelectContent className="bg-zinc-950">
                                      <SelectItem
                                        value="1"
                                        className="text-white cursor-pointer"
                                      >
                                        Administrador
                                      </SelectItem>
                                      <SelectItem
                                        value="2"
                                        className="text-white cursor-pointer"
                                      >
                                        Nivel 1
                                      </SelectItem>
                                      <SelectItem
                                        value="3"
                                        className="text-white cursor-pointer"
                                      >
                                        Nivel 2
                                      </SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                              </div>
                              <DialogFooter>
                                <Button type="submit">Salvar Mudanças</Button>
                              </DialogFooter>
                            </form>
                          </DialogContent>
                        </Dialog> */}

                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="flex items-center justify-start py-2 px-4 h-full w-full bg-transparent hover:bg-red-600 text-white font-normal hover:text-white">
                              Excluir perfil
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px] text-white">
                            <DialogHeader>
                              <DialogTitle>Excluir perfil</DialogTitle>
                              <DialogDescription className="text-muted-foreground">
                                Confirme sua decisão de excluir o perfil.
                              </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                  Nome
                                </Label>
                                <Input
                                  id="name"
                                  value={item.name}
                                  className="col-span-3"
                                  disabled
                                />
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="email" className="text-right">
                                  E-mail
                                </Label>
                                <Input
                                  id="email"
                                  value={item.email}
                                  className="col-span-3"
                                  disabled
                                />
                              </div>
                            </div>
                            <Button
                              type="button"
                              className="bg-red-600 hover:bg-red-700 text-secondary hover:text-foreground"
                              onClick={() => handleDeleteUser(item.id)}
                            >
                              Excluir perfil
                            </Button>
                            <Button
                              type="button"
                              onClick={() => handleGetUsers()}
                              className="text-secondary hover:text-foreground"
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
  );
}
