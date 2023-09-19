import Logo from '../../assets/logoHorizontal.svg'
import { SideBar } from '../../components/Siderbar'
import { DashboardCharts } from '../../components/dashboard'
import styles from './styles.module.css'
import { LayoutDashboard } from 'lucide-react'

export function Dashboard() {
    return (
        <div className={styles.container}>
            <header className={styles.header_wrapper}>
                <SideBar />
                <div className={styles.header_content_wrapper}>
                    <section className={styles.header_section_wrapper}>
                        <div className={styles.section_title_wrapper}>
                            <LayoutDashboard color='#ffffff' size={32} />
                            <h1>Dashboard: Análise de produtos</h1>
                        </div>
                        <div className={styles.section_subtitle_wrapper}>
                            <span>
                                Análises de produtos vendidos pela Americanas
                            </span>
                        </div>
                    </section>
                    <section>
                        <img src={Logo} alt="" />
                    </section>
                </div>
            </header>
            <main className={styles.main_charts_wrapper}>
                <DashboardCharts />
            </main>
        </div>
    )
}  