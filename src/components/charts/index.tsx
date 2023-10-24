import { LineChartComponent } from '@/data/chartLineData';
import { ChartBarComponent } from '@/data/chartBarData';
import { DonutsChartComponent } from '@/data/chartDonuts';
import { BarMedChartComponent } from '@/data/chartBarDataMed';

export function DashboardCharts() {
    return (
        <div className='h-screen pb-4'>
            <div className='flex flex-col h-full gap-4'>
                <div className='bg-zinc-800 w-full h-[38rem] p-6 rounded-md shadow-lg'>
                    <div className='h-full'>
                        <div className='flex gap-4 h-full'>
                            <div className='bg-zinc-700 w-[25%] h-full rounded-md shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:cursor-pointer'>
                                <div className='h-full w-full py-4'>
                                    <ChartBarComponent />
                                </div>
                            </div>

                            <div className='bg-zinc-700 w-[25%] h-full rounded-md shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:cursor-pointer'>
                                <div className='h-full w-full py-4'>
                                    <BarMedChartComponent />
                                </div>
                            </div>

                            <div className='bg-zinc-700 w-[50%] h-full rounded-md shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:cursor-pointer'>
                                <DonutsChartComponent />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-zinc-800 w-full h-[cd ..%] rounded-md shadow-lg p-6'>
                    <div className='bg-zinc-700 w-full h-full p-4 rounded-md shadow-lg'>
                       <LineChartComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}