import { ChangeEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import api from "@/services/api.service";
import URI from "@/utils/enum/uri.enum";
import { toast } from 'react-toastify';

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const createUserSchema = z.object({
  name: z
    .string()
    .nonempty("Nome obrigatório para o cadastro !")
    .transform((value) => {
      return value
        .trim()
        .split(" ")
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1));
        })
        .join(" ");
    }),
  email: z
    .string()
    .nonempty("Email obrigatório para o cadastro !")
    .email("Formato de e-mail inválido")
    .transform((value) => value.toLowerCase()),
  password: z
    .string()
    .nonempty("Senha obrigatoria para o cadastro !")
    .min(6, "Senha deve conter no mínimo 6 caracteres !"),
  role: z
    .string()
    .nonempty("Nivel do usuário obrigatório para o cadastro !")
});

type CreateUserFormData = z.infer<typeof createUserSchema>;

export function UserModal() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserSchema),
  });

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  const errorToastUserExist = () => toast.error("Usuário já cadastrado!", {
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

  function handleRegister(data: CreateUserFormData) {
    api
      .post(URI.USER_REGISTER, data)
      .then(() => {
        success();
        setIsOpen(false);
        reset();
      })
      .catch((error) => {
        errorToastUserExist();
        console.log(error);
      });
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild >
        <Button className="flex items-center justify-start py-2 px-4 h-full w-full bg-blue-800">
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
              <Label htmlFor="name">
                Nome
                {errors.name && (
                  <span className="text-red-500 text-sm">
                    {errors.name.message}
                  </span>
                )}
              </Label>
              <Input
                id="name"
                placeholder="Nome"
                autoComplete="off"
                className="bg-zinc-950 text-white p-4 h-12 rounded-sm border-zinc-400 placeholder:text-zinc-500"
                {...register("name")}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">
                E-mail
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </Label>
              <Input
                id="email"
                autoComplete="off"
                placeholder="E-mail"
                className="bg-zinc-950 text-white p-4 h-12 rounded-sm border-zinc-400 placeholder:text-zinc-500"
                {...register("email")}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="password">
                Senha
                {errors.password && (
                  <span className="text-red-500 text-sm">
                    {errors.password.message}
                  </span>
                )}
              </Label>
              <div className="flex items-center gap-1">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Senha"
                  autoComplete="off"
                  className="bg-zinc-950 text-white p-4 h-12 rounded-sm border-zinc-400 placeholder:text-zinc-500"
                  {...register("password")}
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
              <Label htmlFor="role">
                Nivel do usuário
                {errors.role && (
                  <span className="text-red-500 text-sm">
                    {errors.role.message}
                  </span>
                )}
              </Label>
              <select
              {...register('role')}
              className='bg-zinc-950 px-4 h-12 text-white rounded-sm border-zinc-400 border'
              >
                <option value="" disabled selected>Selecione</option>
                <option value='0'>
                  Administrador
                </option>
                <option value='1'>
                  Nivel 1
                </option>
                <option value='2'>
                  Nivel 2
                </option>
              </select>
            </div>
          </div>

          <div className="flex justify-end mt-8 w-full">
            <Button type="submit">Cadastrar usuário</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
