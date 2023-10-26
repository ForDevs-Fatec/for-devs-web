import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import api from "@/services/api.service";
import URI from "@/utils/enum/uri.enum";
import { toast } from 'react-toastify';

import {
  useForm,
} from "react-hook-form";

type UserRegisterFormData = {
  name: string;
  email: string;
  password: string;
  role: number;
}

export function UserModal() {
  const [selectedRole, setSelectedRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegisterFormData>();

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  const errorToastUserExist = () => toast.error("Usuário já cadastrado!", {
    position: "top-center",
    autoClose: 2000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  const errorToast = () => toast.error("Erro ao criar usuário!", {
    position: "top-center",
    autoClose: 2000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  const success = () => toast.success("Usuário criado com sucesso!", {
    position: "top-center",
    autoClose: 2000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  function handleRegister(data: UserRegisterFormData) {
    selectedRole === 'ADMIN' ? data.role = 0 : selectedRole === 'NIVEL1' ? data.role = 1 : data.role = 2;
    console.log(data)
    setIsLoading(true);
    setTimeout(() => {
      api
        .post(URI.USER_REGISTER, data)
        .then(() => {
          success();
          setIsLoading(false);
          setIsOpen(false);
          window.location.reload();
        })
        .catch((error) => {
          if(error.response.status === 400){
            errorToast();
          }
          if(error.response.status === 409){
            errorToastUserExist();
          }
          setIsLoading(false);
          console.log(error);
        });
    }, 1000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild >
        <Button className="flex items-center gap-4 w-full p-4 h-12 bg-blue-800 hover:bg-blue-700 transition-all">
          Novo usuário
        </Button>
      </DialogTrigger>
      <DialogContent className=" text-zinc-50">
        <DialogHeader>
          <DialogTitle>Novo usuário</DialogTitle>
          <DialogDescription className="text-zinc-500">
            Crie um novo usuário. Por favor preencha todos os campos para que o
            usuário seja criado com sucesso.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(handleRegister)}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name" className='flex items-center justify-between'>
                Nome
                {errors.name && (<span className='text-red-500'>{errors.name.message}</span>)}
              </Label>
              <Input
                id="name"
                placeholder="Nome"
                autoComplete="off"
                className="bg-zinc-950 text-white p-4 h-12 rounded-sm border-zinc-400 placeholder:text-zinc-500"
                {...register("name", {
                  required: "Nome é obrigatório",
                  minLength: { value: 3, message: "Nome deve ter no mínimo 3 caracteres" },
                })}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email" className='flex items-center justify-between'>
                E-mail
                {errors.email && (<span className='text-red-500'>{errors.email.message}</span>)}
              </Label>
              <Input
                id="email"
                autoComplete="off"
                placeholder="E-mail"
                className="bg-zinc-950 text-white p-4 h-12 rounded-sm border-zinc-400 placeholder:text-zinc-500"
                {...register("email", {
                  required: "E-mail é obrigatório",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "E-mail inválido",
                  },
                })}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="password" className='flex items-center justify-between'>
                Senha
                {errors.password && (<span className='text-red-500'>{errors.password.message}</span>)}
              </Label>
              <div className="flex items-center gap-1">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Senha"
                  autoComplete="off"
                  className="bg-zinc-950 text-white p-4 h-12 rounded-sm border-zinc-400 placeholder:text-zinc-500"
                  {...register("password", {
                    required: "Senha é obrigatória",
                    minLength: {
                      value: 6,
                      message: "Senha deve ter no mínimo 6 caracteres",
                    },
                  })}
                />
                <Button
                  onClick={togglePasswordVisibility}
                  type="button"
                  className="bg-zinc-950 text-white p-4 h-12 rounded-sm border border-zinc-400 hover:bg-zinc-800"
                >
                  {showPassword ? <Eye /> : <EyeOff />}
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="role" className='flex items-center justify-between'>
                Nivel do usuário
                {errors.role && (<span className='text-red-500'>{errors.role.message}</span>)}
              </Label>
              <select
                className='bg-zinc-950 px-4 h-12 text-white rounded-sm border-zinc-400 border hover:cursor-pointer'
                {...register("role", {
                  required: "Selecione o nível do usuário",
                })}
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
              >
                <option value="" disabled selected>Selecione</option>
                <option value="ADMIN">Administrador</option>
                <option value="NIVEL1">Nivel 1</option>
                <option value="NIVEL2">Nivel 2</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end mt-8 w-full">
            {isLoading?
            <Button type="submit" disabled className='flex items-center gap-4 w-full p-4 h-12 bg-blue-800 hover:bg-blue-700 transition-all'>
              <Loader2 className='animate-spin'/>
              Registrando
            </Button>
            :
            <Button type="submit" className="w-full p-4 h-12 bg-blue-800 hover:bg-blue-700 transition-all">Cadastrar usuário</Button>
            }
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
