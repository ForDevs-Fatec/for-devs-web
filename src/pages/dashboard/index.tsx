import Logo from '../../assets/logoHorizontal.svg'
import styles from './styles.module.css'
import { LayoutDashboard } from 'lucide-react'

export function Dashboard() {
    
    return (
        <div className={styles.container}>
            <header className={styles.header_wrapper}>
                <section className={styles.header_section_wrapper}>
                    <div className={styles.section_title_wrapper}>
                        <LayoutDashboard color='#ffffff' size={24}/>
                        <h1>Dashboard: Análise de produtos</h1>
                    </div>
                    <span>
                        Análises de produtos vendidos pela Americanas
                    </span>
                </section>
                <section>
                    <img src={Logo} alt="" />
                </section>
            </header>
            <main className={styles.main_wrapper}>

            </main>
        </div>
    )
}  