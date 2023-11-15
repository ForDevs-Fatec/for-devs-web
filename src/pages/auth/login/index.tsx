import { useState } from "react";
import { Eye, EyeOff, LogIn, Loader2 } from "lucide-react";
import Logo from "@/assets/logo.svg";
import api from "../../../services/api.service";
import URI from "../../../utils/enum/uri.enum";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const loginUserSchema = z.object({
  email: z
    .string()
    .nonempty("Email obrigatório para o login !")
    .email("Formato de e-mail inválido")
    .transform((value) => value.toLowerCase()),
  password: z.string().nonempty("Senha obrigatoria para o login !"),
});

type LoginUserFormData = z.infer<typeof loginUserSchema>;

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserFormData>({
    resolver: zodResolver(loginUserSchema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const errorToast = () =>
    toast.error("Usuário ou senha inválidos!", {
      position: "top-center",
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const success = () =>
    toast.success("Login realizado com sucesso!", {
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

    api
      .post(URI.USER_LOGIN, data)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          console.log(response.data.token);
          navigate("/dashboard");
        }
      })
      .then(() => {
        success();
      })
      .catch((error) => {
        errorToast();
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="flex flex-col justify-start items-center h-screen px-5">
      <header className="flex items-center gap-2 h-16 w-full">
        <img src={Logo} alt="logo fordevs" className="h-7 w-7" />
        <span className="text-lg text-foreground font-medium">
          For
          <span className="text-primary">Devs</span>
        </span>
      </header>

      <main className="flex justify-center items-center w-full h-screen">
        <div className="flex flex-col gap-6 w-[33rem] p-6 shadow-lg border border-border rounded-md">
          <header className="flex flex-col items-center gap-2">
            <h1 className="flex items-center gap-2 text-foreground text-lg font-medium">
              Login <LogIn />
            </h1>
            <span className="text-muted-foreground">
              Para acessar a plataforma, faça o login.
            </span>
          </header>

          <form
            onSubmit={handleSubmit(handleLoginSubmit)}
            className="flex flex-col gap-6 h-full w-full" 
          >
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <label htmlFor="email" className="text-foreground">
                  E-mail
                </label>
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <Input
                type="email"
                placeholder="E-mail"
                autoComplete="username"
                {...register("email")}
                className="bg-transparent text-foreground p-4 h-12 rounded-sm border-border placeholder:text-muted-foreground"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-foreground">
                  Senha
                </label>
                {errors.password && (
                  <span className="text-red-500 text-sm">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Senha"
                  {...register("password")}
                  className="bg-transparent text-foreground p-4 h-12 rounded-sm border-border placeholder:text-muted-foreground"
                />
                <Button
                  onClick={togglePasswordVisibility}
                  type="button"
                  className="bg-transparent text-foreground p-4 h-12 rounded-sm border border-border"
                >
                  {showPassword ? <Eye /> : <EyeOff />}
                </Button>
              </div>
            </div>
            {loading ? (
              <Button
                type="submit"
                disabled
                className="flex items-center gap-4 w-full p-4 h-12 text-secondary hover:text-foreground bg-primary hover:bg-primary-foreground transition-all"
              >
                <Loader2 className="animate-spin" />
                Acessando
              </Button>
            ) : (
              <Button
                type="submit"
                className="w-full p-4 h-12 text-secondary hover:text-foreground bg-primary hover:bg-primary-foreground transition-all"
              >
                Acessar
              </Button>
            )}
          </form>

          <Separator className='bg-muted-foreground'/>

          <footer className="flex flex-col items-center gap-2">
            <span className="text-zinc-300 font-bold text-sm">
              Não possui conta?
            </span>
            <span className="text-center text-muted-foreground text-sm">
              Entre em contato com o administrador do sistema para criar uma
              conta.
            </span>
          </footer>
        </div>
      </main>

      <footer className="flex items-end justify-center h-16 pb-2">
        <span className="text-muted-foreground font-bold">
          © 2023 ForDevs. All rights reserved.
        </span>
      </footer>
    </div>
  );
}
