import { useState } from 'react'

import { LayoutDashboard, Menu } from 'lucide-react'
import { Header } from '../../components/Header'

import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom'

export function Dashboard() {
    const [openMenu, setOpenMenu] = useState(true)

    const navigate = useNavigate();
    
    const handleOpenMenu = () => {
        setOpenMenu(true)
    }

    const handleLogout = () => {
        localStorage.clear()
        navigate('/')
    }

    return (
        <div className={styles.container}>
            <button onClick={handleLogout}>
                sair
            </button> 
            <main className={styles.main_wrapper}>
                <Header.Root>
                    <Header.MenuButton icon={Menu} onClick={handleOpenMenu} />
                    <Header.Content
                        text='Dashboard: Análise de produtos'
                        subTitle='Análises de produtos vendidos pela Americanas'
                        icon={LayoutDashboard}
                    />
                    <Header.Logo />
                </Header.Root>
            </main>
        </div>
    )
}  