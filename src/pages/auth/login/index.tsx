import Logo from '../../../assets/logoVertical.svg'
import { LogIn } from 'lucide-react'
import './styles.css'

export function Login() {
  return (
    <div className='container'>
      {/* Header */}
      <header>
        <img src={Logo} alt="Fordevs logo-marca" />
        <div className="header_content">
          <div>
            <span id='header_title_blue'>Log</span>
            <span>in</span> 
          </div>
          <LogIn
            size={24}
            color='#E1E1E6'
          />
        </div>
      </header>

      {/* Main */}
      <main>
        <section className='main_title_wrapper'>
          <h1>Bem vindo !</h1>
          <p>Para acessar a plataforma, faça seu login.</p>
        </section>
        
        <section className='main_inputs_wrapper'>
          <div className='input_wrapper'>
            <span>E-mail</span>
          </div>
          <div className='input_wrapper'>
            <span>Senha</span>
          </div>
        </section>

        <section className='main_button_wrapper'>
          
          <span>
            <a>
              Esqueceu sua senha ?
            </a>
          </span>
        </section>
      </main>
 
      {/* Footer */}
      <footer>
        <span>
          Não possui conta?
          <a>
            Cadastre-se
          </a>
        </span>
      </footer>
    </div>
  )
}
