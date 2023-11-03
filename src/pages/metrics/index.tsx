import { HeaderComponent } from "@/components/headerComponent";
import { AlarmClock, Percent } from "lucide-react";
import Chart from 'react-apexcharts';

const options: ApexCharts.ApexOptions = {
  chart: {
    type: 'area',
  },
  dataLabels: {
    enabled: false
  },
  series: [
    {
      name: 'Tokenização',
      data: generateRandomDataAndAverage(7).data,
      color: '#F87171'
    },
    {
      name: 'Pré processamento',
      data: generateRandomDataAndAverage(7).data,
      color: '#FBBF24'
    },
    {
      name: 'Stopword',
      data: generateRandomDataAndAverage(7).data,
      color: '#34D399'
    },
    {
      name: 'Analise de sentimentos',
      data: generateRandomDataAndAverage(7).data,
      color: '#60A5FA'
    },
    {
      name: 'Classificação de tema',
      data: generateRandomDataAndAverage(7).data,
      color: '#f8a581'
    },
    {
      name: 'Pesquisa PLN',
      data: generateRandomDataAndAverage(7).data,
      color: '#fa8be4'
    },
  ],
  fill: {
    type: "solid",
    opacity: 0.8,
    colors: ['#F87171', '#FBBF24', '#34D399', '#60A5FA', '#f8a581', '#fa8be4'],
  },
  stroke: {
    curve: 'smooth',
    colors: ['#F87171', '#FBBF24', '#34D399', '#60A5FA', '#f8a581', '#fa8be4'],
  },
  xaxis: {
    categories:
      [
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sabado',
        'Domingo'
      ],
    labels: {
      style: {
        colors: '#FFFFFF',
        fontSize: '12px',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 400,
        cssClass: 'apexcharts-xaxis-label',
      },
    }
  },
  yaxis: {
    labels: {
      style: {
        colors: '#FFFFFF',
        fontSize: '12px',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 400,
        cssClass: 'apexcharts-xaxis-label',
      },
    }
  },
  tooltip: {
    theme: 'dark',
    y: {
      formatter: function (val: number) {
        return val + "s"
      }
    }
  },
  legend: {
    labels: {
      colors: '#FFFFFF',
    },
    position: 'right',
    horizontalAlign: 'center',
  },
}

function generateRandomDataAndAverage(numPoints = 7) {
  const data = [];
  let sum = 0;

  for (let i = 0; i < numPoints; i++) {
    const randomValue = Math.floor(Math.random() * 100);
    data.push(randomValue);
    sum += randomValue;
  }

  const average = sum / numPoints;
  return { data, average };
}

export function MetricsPage() {
  const { average: tokenizacaoAverage } = generateRandomDataAndAverage(7);
  const { average: preprocessamentoAverage } = generateRandomDataAndAverage(7);
  const { average: stopwordAverage } = generateRandomDataAndAverage(7);
  const { average: analiseSentimentosAverage } = generateRandomDataAndAverage(7);
  const { average: classificacaoTemaAverage } = generateRandomDataAndAverage(7);
  const { average: pesquisaPLNAverage } = generateRandomDataAndAverage(7);

  return (

    <div className='p-4'>
      <HeaderComponent />
      <div className="flex justify-center items-center pt-5">
        <div className='flex flex-col justify-start gap-5 w-[71.875rem] h-screen'>
          <div className='flex flex-col items-center justify-center gap-5'>
            <div className='flex items-center justify-center gap-5 w-full'>
              <div className='flex items-center justify-between p-5 h-full bg-[#282828] w-[33%] rounded-xl hover:scale-105 hover:cursor-pointer transition-all '>
                <div className='w-[30%]'>
                  <div className='flex items-center justify-center rounded-full bg-zinc-700 w-14 h-14'>
                    <AlarmClock className='text-white' />
                  </div>
                </div>
                <div className='flex flex-col items-end w-[70%]'>
                  <h1 className='text-zinc-400 text-sm font-thin'>
                    Pré processamento
                  </h1>
                  <span className='text-2xl text-white font-semibold'>{`Média ${preprocessamentoAverage.toFixed(1)}s`}</span>
                </div>
              </div>

              <div className='flex items-center justify-between p-5 h-full bg-[#282828] w-[33%] rounded-xl hover:scale-105 hover:cursor-pointer transition-all '>
                <div className='w-[30%]'>
                  <div className='flex items-center justify-center rounded-full bg-zinc-700 w-14 h-14'>
                    <AlarmClock className='text-white' />
                  </div>
                </div>
                <div className='flex flex-col items-end w-[70%]'>
                  <h1 className='text-zinc-400 text-sm font-thin'>
                    Stopword
                  </h1>
                  <span className='text-2xl text-white font-semibold'>{`Média ${stopwordAverage.toFixed(1)}s`}</span>
                </div>
              </div>

              <div className='flex items-center justify-between p-5 h-full bg-[#282828] w-[33%] rounded-xl hover:scale-105 hover:cursor-pointer transition-all '>
                <div className='w-[30%]'>
                  <div className='flex items-center justify-center rounded-full bg-zinc-700 w-14 h-14'>
                    <AlarmClock className='text-white' />
                  </div>
                </div>
                <div className='flex flex-col items-end w-[70%]'>
                  <h1 className='text-zinc-400 text-sm font-thin'>
                    Tokenização
                  </h1>
                  <span className='text-2xl text-white font-semibold'>{`Média ${tokenizacaoAverage.toFixed(1)}s`}</span>
                </div>
              </div>
            </div>

            <div className='flex items-center justify-center gap-5 w-full'>
              <div className='flex items-center justify-between p-5 h-full bg-[#282828] w-[33%] rounded-xl hover:scale-105 hover:cursor-pointer transition-all '>
                <div className='w-[30%]'>
                  <div className='flex items-center justify-center rounded-full bg-zinc-700 w-14 h-14'>
                    <AlarmClock className='text-white' />
                  </div>
                </div>
                <div className='flex flex-col items-end w-[70%]'>
                  <h1 className='text-zinc-400 text-sm font-thin'>
                    Analise de sentimentos
                  </h1>
                  <span className='text-2xl text-white font-semibold'>{`Média ${analiseSentimentosAverage.toFixed(1)}s`}</span>
                </div>
              </div>

              <div className='flex items-center justify-between p-5 h-full bg-[#282828] w-[33%] rounded-xl hover:scale-105 hover:cursor-pointer transition-all '>
                <div className='w-[30%]'>
                  <div className='flex items-center justify-center rounded-full bg-zinc-700 w-14 h-14'>
                    <AlarmClock className='text-white' />
                  </div>
                </div>
                <div className='flex flex-col items-end w-[70%]'>
                  <h1 className='text-zinc-400 text-sm font-thin'>
                    Classificação de tema
                  </h1>
                  <span className='text-2xl text-white font-semibold'>{`Média ${classificacaoTemaAverage.toFixed(1)}s`}</span>
                </div>
              </div>

              <div className='flex items-center justify-between p-5 h-full bg-[#282828] w-[33%] rounded-xl hover:scale-105 hover:cursor-pointer transition-all '>
                <div className='w-[30%]'>
                  <div className='flex items-center justify-center rounded-full bg-zinc-700 w-14 h-14'>
                    <AlarmClock className='text-white' />
                  </div>
                </div>
                <div className='flex flex-col items-end w-[70%]'>
                  <h1 className='text-zinc-400 text-sm font-thin'>
                    Pesquisa PLN
                  </h1>
                  <span className='text-2xl text-white font-semibold'>{`Média ${pesquisaPLNAverage.toFixed(1)}s`}</span>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col h-[65%] p-6 bg-[#282828] rounded-[1.25rem]'>
            <h1 className='text-white text-sm font-thin'>
              Bar Chart
            </h1>

            <Chart
                options={options}
                series={options.series}
                width='100%'
                height='100%'
              />
          </div>
        </div>
      </div>
    </div>
  )
}