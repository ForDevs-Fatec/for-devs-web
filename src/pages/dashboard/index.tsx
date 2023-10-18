import { DashboardCharts } from '@/components/charts'
import { HeaderComponent } from '@/components/headerComponent'

export function Dashboard() {
    return (
        <div className='p-4 h-screen w-full'>
            <HeaderComponent />
            <div className='w-full h-screen py-8 px-12'>
                <DashboardCharts />
            </div>
        </div>
    )
}  