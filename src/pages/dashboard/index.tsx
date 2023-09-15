import { useState } from 'react'

import { LayoutDashboard, Menu } from 'lucide-react'
import { Header } from '../../components/Header'

import styles from './styles.module.css'
import { Sidebar } from '../../components/Siderbar'

export function Dashboard() {
    const [openMenu, setOpenMenu] = useState(true)

    const handleOpenMenu = () => {
        setOpenMenu(true)
    }
    
    return (
        <div className={styles.container}>
            <Sidebar />
            <main className={styles.main_wrapper}>
                <Header.Root>
                    <Header.MenuButton icon={Menu} onClick={handleOpenMenu}/>
                    <Header.Content
                        text='Dashboard: Análise de produtos'
                        subTitle='Análises de produtos vendidos pela Americanas'
                        icon={LayoutDashboard}
                    />
                    <Header.Logo/>
                </Header.Root>
            </main>
        </div>
    )
}  