import { useState } from 'react'

import { Eye, EyeOff, Lock, LogIn, Mail, Unlock } from 'lucide-react'

import Logo from '../../../assets/logoVertical.svg'
import { Input } from '../../../components/input'
import { Button } from '../../../components/Button'

import styles from './styles.module.css'

export function Login() {
  const [showPassword, setShowPassword] = useState(false);

  // Função para alternar entre mostrar e esconder a senha
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.container}>
      <div className={styles.main_wrapper}>
        {/* Header */}
        <header>
          <img src={Logo} alt="Fordevs logo-marca" />
          <div className={styles.header_content}>
            <div>
              <span id={styles.header_title_blue}>Log</span>
              <span>in</span>
            </div>
            <LogIn size={24} color="#E1E1E6" />
          </div>
        </header>

        {/* Main */}
        <main>
          <section className={styles.main_title_wrapper}>
            <h1>Bem vindo !</h1>
            <p>Para acessar a plataforma, faça seu login.</p>
          </section>

          <section className={styles.main_inputs_wrapper}>
            <div className={styles.input_wrapper}>
              <span>E-mail</span>
              <Input.Root>
                <Input.IconLeft icon={Mail} />
                <Input.TextField placeholder="E-mail" />
              </Input.Root>
            </div>
            <div className={styles.input_wrapper}>
              <span>Senha</span>
              <Input.Root>
                <Input.IconLeft icon={showPassword ? Unlock : Lock} />
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
          </section>

          <section className={styles.main_button_wrapper}>
            <Button.Root>
              <Button.Content text="Acessar" />
            </Button.Root>

            <span>
              <a>Esqueceu sua senha ?</a>
            </span>
          </section>
        </main>

        {/* Footer */}
        <footer>
          <span>
            Não possui conta?
            <a href="/register">Cadastre-se</a>
          </span>
        </footer>
      </div>
    </div>
  );
}
