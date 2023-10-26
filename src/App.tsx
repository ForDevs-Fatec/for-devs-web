import { ThemeProvider } from 'styled-components'
import theme from './styles/global/theme'
import './styles/global/styles.css'
import { MainRoutes } from './routes/routes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from "@/components/ui/toaster"

export default function App() {
  return (
    <ThemeProvider theme={theme}>
        <MainRoutes />
        <ToastContainer />
        <Toaster />
    </ThemeProvider>
  )
}