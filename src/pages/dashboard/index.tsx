import { SideBarMenu } from '@/components/sideMenu'
import { DashboardCharts } from '../../components/dashboard'
import { LayoutDashboard } from 'lucide-react'
import { Header } from '../../components/header'

import { Container, HeaderWrapper, MainContent} from './styles'

export function Dashboard() {
    return (
        <Container>
            <HeaderWrapper>
                <SideBarMenu />
                <Header.Root>
                    <Header.TitleWrapper>
                        <Header.TitleContent icon={LayoutDashboard} title='Dashboard' />
                    </Header.TitleWrapper>
                    <Header.LogoWrapper>
                        <Header.Logo />
                    </Header.LogoWrapper>
                </Header.Root>
            </HeaderWrapper>
            <MainContent>
                <DashboardCharts />
            </MainContent>
        </Container>
    )
}  