import {ThemeProvider} from 'styled-components'
import theme from './styles/global/theme'
import './styles/global/styles.css'
///import {Login} from './pages/auth/login'<Login />
import {Register} from './pages/register'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      
      <Register />
    </ThemeProvider>
  )
}