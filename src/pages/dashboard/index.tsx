import { DashboardCharts } from '@/components/dashboard';
import { HeaderComponent } from '@/components/headerComponent'

export function Dashboard() {


    return (
        <div className='p-4 h-screen w-full'>
            <HeaderComponent />

            <div className='w-full mt-8'>
                <DashboardCharts />
            </div>
        </div>
    )
}  