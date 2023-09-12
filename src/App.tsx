import {ThemeProvider} from 'styled-components'
import theme from './styles/global/theme'
import './styles/global/styles.css'
import { MainRoutes } from './utils/routes/routes'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
        <MainRoutes />
    </ThemeProvider>
  )
}