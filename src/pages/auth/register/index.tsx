import { ChangeEvent, FormEvent, useState } from 'react';
import PasswordChecklist from 'react-password-checklist';

import { AtSign, Eye, EyeOff, Lock, Unlock, User } from 'lucide-react';
import { Input } from '../../../components/input';
import { Button } from '../../../components/Button';

import Logo from '../../../assets/logoVertical.svg'

import styles from './styles.module.css'
import api from '../../../services/api.service';
import URI from '../../../utils/enum/uri.enum';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export function Register() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState({
    admin: false,
    nivel1: false,
    nivel2: false
  });
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [password, setPassword] = useState("");
  const [passConfirmCheck, setConfirmPassCheck] = useState("");

  const navigate = useNavigate();

  const errorToast = () => toast.error("Informações incompletas!", {
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

  const toggleShowPass = () => {
    setShowPass(!showPass);
  };

  const toggleShowConfirmPass = () => {
    setShowConfirmPass(!showConfirmPass);
  };


  const getName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const getEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const handleCheckBoxValue = (event: ChangeEvent<HTMLInputElement>) => {
    setRole({
      ...role,
      [event.target.id]: event.target.checked
    })
  }

  function handleRegister(event: FormEvent) {
    event.preventDefault();

    const data = {
      name,
      email,
      password,
      ...(role.admin && {role: 'admin'}),
      ...(role.nivel1 && {role: 'nivel1'}),
      ...(role.nivel2 && {role: 'nivel2'})
    };

    console.log(data);

    api.post(URI.USER_REGISTER, data).then(response => {
      if (response.status === 201) {
        navigate('/');
      }
    }).then(() => {
      success();
    }).catch(error => {
      errorToast();
      console.log(error)
    })
  }

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

        <form className={styles.main_wrapper} onSubmit={handleRegister}>
          <fieldset>
            <div className={styles.input_wrapper}>
              <label htmlFor="name">Nome</label>
              <Input.Root>
                <Input.IconLeft icon={User} />
                <Input.TextField
                  type='text'
                  placeholder="Nome"
                  value={name}
                  onChange={getName}
                />
              </Input.Root>
            </div>
            <div className={styles.input_wrapper}>
              <label htmlFor="email">E-mail</label>
              <Input.Root>
                <Input.IconLeft icon={AtSign} />
                <Input.TextField
                  type='email'
                  placeholder="Email"
                  value={email}
                  onChange={getEmail}
                />
              </Input.Root>

            </div>
            <div className={styles.input_wrapper}>
              <label htmlFor="password">Senha</label>
              <Input.Root>
                <Input.IconLeft icon={showPass ? Unlock : Lock} />
                <Input.TextField
                  value={password}
                  placeholder="Senha"
                  onChange={e => setPassword(e.target.value)}
                  type={showPass ? "text" : "password"}
                />
                <Input.ButtonIcon
                  type='button'
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
                  type='button'
                  icon={showConfirmPass ? Eye : EyeOff}
                  onClick={toggleShowConfirmPass}
                />
              </Input.Root>
            </div>
            <PasswordChecklist
              rules={["minLength", "specialChar", "number", "capital", "match"]}
              minLength={8}
              value={password}
              valueAgain={passConfirmCheck}
              messages={{
                minLength: "A senha tem pelo menos 8 caracteres.",
                specialChar: "A senha possui caracteres especiais.",
                number: "A senha contém pelo menos um número.",
                capital: "A senha inclui pelo menos uma letra maiúscula.",
                match: "As senhas coincidem.",
              }}
            />

            <div>
              <label>admin</label>
              <input type="checkbox" name="admin" id="admin" checked={role.admin} onChange={handleCheckBoxValue}/>
            </div>
            <div>
              <label>nivel 1</label>
              <input type="checkbox" name="nivel1" id="nivel1" checked={role.nivel1} onChange={handleCheckBoxValue}/>
            </div>
            <div>
              <label>nivel 2</label>
              <input type="checkbox" name="nivel2" id="nivel2" checked={role.nivel2} onChange={handleCheckBoxValue}/>
            </div>
          </fieldset>
          <Button.Root type='submit'>
            <Button.Content text="Cadastrar" />
          </Button.Root>
        </form>
      </section>
    </div>
  );
}
