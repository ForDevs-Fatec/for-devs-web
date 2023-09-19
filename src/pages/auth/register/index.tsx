import { ChangeEvent, FormEvent, useState } from 'react';
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
  const [role, setRole] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [password, setPassword] = useState("");

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

  const getName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const getEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const handleCheckBoxValue = (event: ChangeEvent<HTMLInputElement>) => {
    setRole(event.target.value)
  }

  function handleRegister(event: FormEvent) {
    event.preventDefault();

    const data = {
      name,
      email,
      password,
      role: parseInt(role)
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

            <div>
              <label>admin</label>
              <input type="checkbox" name="admin" id="admin" value={0} onChange={handleCheckBoxValue}/>
            </div>
            <div>
              <label>nivel 1</label>
              <input type="checkbox" name="nivel1" id="nivel1" value={1} onChange={handleCheckBoxValue}/>
            </div>
            <div>
              <label>nivel 2</label>
              <input type="checkbox" name="nivel2" id="nivel2" value={2} onChange={handleCheckBoxValue}/>
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
