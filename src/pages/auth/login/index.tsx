import { useState } from 'react'

import {
  Eye,
  EyeOff,
  Lock,
  LogIn,
  Mail,
  Unlock
} from 'lucide-react'

import Logo from '../../../assets/logoVertical.svg'
import { Input } from '../../../components/input'
import { Button } from '../../../components/Button'

import styles from './styles.module.css'
import API from '../../../services/api.service'
import URI from '../../../utils/enum/uri.enum'
import { useNavigate } from 'react-router-dom'

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  // Função para alternar entre mostrar e esconder a senha
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await API.post(URI.USER_LOGIN, {
        email,
        password,
      });
      console.log(response);
      // Verifique a resposta da API e lide com o login bem-sucedido
      if (response.status === 200) {
        // Login bem-sucedido, você pode redirecionar o usuário para a página de dashboard, por exemplo
        navigate('/dashboard');
        console.log('Login bem-sucedido!');
      }
    } catch (error) {
      // Lidar com erros de login
      console.error('Erro ao fazer login:', error);
    }
  };
  

  return (
    <div className={styles.container}>
      <div className={styles.main_wrapper}>
        {/* Header */}
        <header className={styles.header_wrapper}>
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
        <main className={styles.form_wrapper}>
          <section className={styles.main_title_wrapper}>
            <h1>Bem vindo !</h1>
            <p>Para acessar a plataforma, faça seu login.</p>
          </section>

          <form className={styles.main_inputs_wrapper} onSubmit={handleSubmit}>
            <div className={styles.input_wrapper}>
              <span>E-mail</span>
              <Input.Root>
                <Input.IconLeft icon={Mail} />
                <Input.TextField
                    type="email"
                    placeholder="E-mail"
                    autoComplete="username"
                    value={email}
                    onChange={handleEmailChange}
                />
              </Input.Root>
            </div>
            <div className={styles.input_wrapper}>
              <span>Senha</span>
              <Input.Root>
                <Input.IconLeft icon={showPassword ? Unlock : Lock} />
                <Input.TextField
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Senha"
                  autoComplete="current-password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <Input.ButtonIcon
                  icon={showPassword ? Eye : EyeOff}
                  onClick={togglePasswordVisibility}
                  type='button'
                />
              </Input.Root>
            </div>

            <Button.Root type='submit'>
              <Button.Content text="Acessar"/>
            </Button.Root>
          </form>

          <section className={styles.main_button_wrapper}>
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
