import { BarAgeRangeChartComponent } from "@/data/chartBarAgeRange";
import { ChartBarComponent } from "@/data/chartBarData";
import { DonutsChartComponent } from "@/data/chartDonuts";

export function DashboardCharts() {
    return (
        <div className='flex flex-col gap-5 justify-center'>
            {/* <div className='flex gap-5 h-[97px] w-full'>
                <div className='flex items-center justify-center gap-5 w-full'>
                    <div className='flex flex-col gap-4 h-[97px] w-[25%] px-6 py-4 bg-[#282828] rounded-[1.25rem] hover:scale-105 hover:cursor-pointer'>
                        <h1 className='text-white font-semibold'>
                            Bar Chart
                        </h1>

                    </div>

                    <div className='flex flex-col gap-4 h-[97px] w-[25%] px-6 py-4 bg-[#282828] rounded-[1.25rem] hover:scale-105 hover:cursor-pointer'>
                        <h1 className='text-white font-semibold'>
                            Bar Chart
                        </h1>

                    </div>

                    <div className='flex flex-col gap-4 h-[97px] w-[25%] px-6 py-4 bg-[#282828] rounded-[1.25rem] hover:scale-105 hover:cursor-pointer'>
                        <h1 className='text-white font-semibold'>
                            Bar Chart
                        </h1>

                    </div>

                    <div className='flex flex-col gap-4 h-[97px] w-[25%] px-6 py-4 bg-[#282828] rounded-[1.25rem] hover:scale-105 hover:cursor-pointer'>
                        <h1 className='text-white font-semibold'>
                            Bar Chart
                        </h1>

                    </div>
                </div>
            </div> */}

            <div className='flex flex-col gap-5 h-full w-full'>
                <div className='flex items-center justify-center gap-4'>
                    <div className='flex flex-col gap-4 h-[345px] w-[50%] p-6 bg-[#282828] rounded-[1.25rem]'>
                        <h1 className='text-white font-semibold'>
                            Distribuição de sentimento x tema
                        </h1>
                        <ChartBarComponent />
                    </div>

                    <div className='flex flex-col gap-4 h-[345px] w-[50%] p-6 bg-[#282828] rounded-[1.25rem]'>
                        <h1 className='text-white font-semibold'>
                           Distribuição de tema x faixa etária
                        </h1>
                       <BarAgeRangeChartComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}