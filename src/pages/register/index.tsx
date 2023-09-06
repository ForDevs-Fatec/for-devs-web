import { useState } from 'react';
import PasswordChecklist from 'react-password-checklist';

import { AtSign, Eye, EyeOff, Lock, Unlock, User } from 'lucide-react';
import { Input } from '../../components/input';

import Logo from '../../assets/logoVertical.svg'

import styles from './styles.module.css'
import { Button } from '../../components/Button';

export function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  // Função para alternar entre mostrar e esconder a senha
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  // Função para alternar entre mostrar e esconder a senha
  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  }; 

  return (
    <div className={styles.primary_wrapper}>
      <section className={styles.primary_section_wrapper}>
        <header className={styles.header_wrapper}>
          <section>
            <img src={Logo} alt="ForDevs logo-marca" />
          </section>
          <section>
            <span>Cadastro</span>
          </section>
        </header>

        <main className={styles.main_wrapper}>
          <fieldset>
            <div className={styles.input_wrapper}>
              <label htmlFor="name">Nome</label>
              <Input.Root>
                <Input.IconLeft icon={User} />
                <Input.TextField placeholder="Nome" />
              </Input.Root>
            </div>
            <div className={styles.input_wrapper}>
              <label htmlFor="email">E-mail</label>
              <Input.Root>
                <Input.IconLeft icon={AtSign} />
                <Input.TextField placeholder="Email"/>
              </Input.Root>
            
            </div>
            <div className={styles.input_wrapper}>
              <label htmlFor="password">Senha</label>
              <Input.Root>
                <Input.IconLeft icon={showPassword ? Unlock : Lock} />
                <Input.TextField
                  placeholder="Senha"
                  onChange={e => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                />
                <Input.ButtonIcon
                  icon={showPassword ? Eye : EyeOff}
                  onClick={togglePasswordVisibility}
                />
              </Input.Root>
            </div>
            <div className={styles.input_wrapper}>
              <label htmlFor="password">Confirme a senha</label>
              <Input.Root>
                <Input.IconLeft
                  icon={showPassword2 ? Unlock : Lock}
                />
                <Input.TextField
                  placeholder="Confirme a senha"
                  onChange={e => setPasswordAgain(e.target.value)}
                  type={showPassword2 ? "text" : "password"}
                />
                <Input.ButtonIcon
                  icon={showPassword2 ? Eye : EyeOff}
                  onClick={togglePasswordVisibility2}
                />
              </Input.Root>
            </div>
            <PasswordChecklist
              rules={["minLength", "specialChar", "number", "capital", "match"]}
              minLength={8}
              value={password}
              valueAgain={passwordAgain}
              messages={{
                minLength: "A senha tem pelo menos 8 caracteres.",
                specialChar: "A senha possui caracteres especiais.",
                number: "A senha contém pelo menos um número.",
                capital: "A senha inclui pelo menos uma letra maiúscula.",
                match: "As senhas coincidem.",
              }}
            />
          </fieldset>
          <Button.Root>
            <Button.Content text="Cadastrar" />
          </Button.Root>
        </main>
      </section>
    </div>
  );
}
