import { SideBar } from '../../components/sidebar'
import { DashboardCharts } from '../../components/dashboard'
import styles from './styles.module.css'
import { LayoutDashboard } from 'lucide-react'
import { Header } from '../../components/header'

export function Dashboard() {
    return (
        <div className={styles.container}>
            <header className={styles.header_wrapper}>
                <SideBar />
                <Header.Root>
                    <Header.TitleWrapper>
                        <Header.TitleContent icon={LayoutDashboard} title='Dashboard' />
                        <Header.SubTitleContent subtitle='Dashboard' />
                    </Header.TitleWrapper>
                    <Header.LogoWrapper>
                        <Header.Logo />
                    </Header.LogoWrapper>
                </Header.Root>
            </header>
            <main className={styles.main_charts_wrapper}>
                <DashboardCharts />
            </main>
        </div>
    )
}  