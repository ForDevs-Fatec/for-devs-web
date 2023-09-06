import "./styles.css";
import Logo from "../../assets/logoVertical.svg";
import { Input } from "../../components/input";
import { User2, Mail, KeyRound, EyeOff, Eye } from "lucide-react";
import { Button } from "../../components/Button";
import { useState } from "react";

export function Register() {
    const [showPassword, setShowPassword] = useState(false);

    // Função para alternar entre mostrar e esconder a senha
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const [showPassword2, setShowPassword2] = useState(false);

    // Função para alternar entre mostrar e esconder a senha
    const togglePasswordVisibility2 = () => {
      setShowPassword2(!showPassword2);
    };
    
    return (
      <div className="container">
        <div className="main_wrapper">
          <header>
            <img src={Logo} alt="Fordevs logo-marca" />
            <div className="header_content">
              <div>
                <span>Cadastro</span>
              </div>
            </div>
          </header>

          <main>
            <section className="main_inputs_wrapper">
              <div className="input_wrapper">
                <span>Nome</span>
                <Input.Root>
                  <Input.IconLeft icon={User2} />
                  <Input.TextField placeholder="E-mail" />
                </Input.Root>
              </div>
              <div className="input_wrapper">
                <span>E-mail</span>
                <Input.Root>
                  <Input.IconLeft icon={Mail} />
                  <Input.TextField placeholder="E-mail" />
                </Input.Root>
              </div>
              <div className="input_wrapper">
                <span>Senha</span>
                <Input.Root>
                  <Input.IconLeft icon={KeyRound} />
                  <Input.TextField
                    placeholder="Senha"
                    type={showPassword ? "text" : "password"}
                  />
                  <Input.ButtonIcon
                    icon={showPassword ? Eye : EyeOff}
                    onClick={togglePasswordVisibility}
                  />
                </Input.Root>
              </div>
              <div className="input_wrapper">
                <span>Confirme a senha</span>
                <Input.Root>
                  <Input.IconLeft icon={KeyRound} />
                  <Input.TextField
                    placeholder="Senha"
                    type={showPassword2 ? "text" : "password"}
                  />
                  <Input.ButtonIcon
                    icon={showPassword2 ? Eye : EyeOff}
                    onClick={togglePasswordVisibility2}
                  />
                </Input.Root>
              </div>
            </section>

            <section className="main_button_wrapper">
              <Button.Root>
                <Button.Content text="Cadastrar" />
              </Button.Root>
            </section>
          </main>
        </div>
      </div>
    );
}
