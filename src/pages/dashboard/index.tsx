import { DashboardCharts } from '@/components/charts'
import { HeaderComponent } from '@/components/headerComponent'

export function Dashboard() {
    return (
        <div className='p-4'>
            <HeaderComponent />
            <div className="flex justify-center items-center">
                <div className='h-screen w-[71.875rem] pt-6'>
                    <DashboardCharts />
                </div>
            </div>
        </div>
    )
}  