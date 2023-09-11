import { useState } from 'react';
import PasswordChecklist from 'react-password-checklist';

import { AtSign, Eye, EyeOff, Lock, Unlock, User } from 'lucide-react';
import { Input } from '../../../components/input';
import { Button } from '../../../components/Button';

import Logo from '../../../assets/logoVertical.svg'

import styles from './styles.module.css'

export function Register() {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const [passCheck, setPassCheck] = useState("");
  const [passConfirmCheck, setConfirmPassCheck] = useState("");

  // Função para alternar entre mostrar e esconder a senha
  const toggleShowPass = () => {
    setShowPass(!showPass);
  };


  // Função para alternar entre mostrar e esconder a senha
  const toggleShowConfirmPass = () => {
    setShowConfirmPass(!showConfirmPass);
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
                <Input.IconLeft icon={showPass ? Unlock : Lock} />
                <Input.TextField
                  placeholder="Senha"
                  onChange={e => setPassCheck(e.target.value)}
                  type={showPass ? "text" : "password"}
                />
                <Input.ButtonIcon
                  icon={showPass ? Eye : EyeOff}
                  onClick={toggleShowPass}
                />
              </Input.Root>
            </div>
            <div className={styles.input_wrapper}>
              <label htmlFor="password">Confirme a senha</label>
              <Input.Root>
                <Input.IconLeft
                  icon={showConfirmPass ? Unlock : Lock}
                />
                <Input.TextField
                  placeholder="Confirme a senha"
                  onChange={e => setConfirmPassCheck(e.target.value)}
                  type={showConfirmPass ? "text" : "password"}
                />
                <Input.ButtonIcon
                  icon={showConfirmPass ? Eye : EyeOff}
                  onClick={toggleShowConfirmPass}
                />
              </Input.Root>
            </div>
            <PasswordChecklist
              rules={["minLength", "specialChar", "number", "capital", "match"]}
              minLength={8}
              value={passCheck}
              valueAgain={passConfirmCheck}
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
