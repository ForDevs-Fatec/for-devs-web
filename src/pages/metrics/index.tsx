import { HeaderComponent } from "@/components/headerComponent";
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
    const { data: tokenizacaoData, average: tokenizacaoAverage } = generateRandomDataAndAverage(7);
    const { data: preprocessamentoData, average: preprocessamentoAverage } = generateRandomDataAndAverage(7);
    const { data: stopwordData, average: stopwordAverage } = generateRandomDataAndAverage(7);
    const { data: analiseSentimentosData, average: analiseSentimentosAverage } = generateRandomDataAndAverage(7);
    const { data: classificacaoTemaData, average: classificacaoTemaAverage } = generateRandomDataAndAverage(7);
    const { data: pesquisaPLNData, average: pesquisaPLNAverage } = generateRandomDataAndAverage(7);
  
    return (
      <div className='h-screen w-full p-4 '>
        <HeaderComponent />
  
        <div className='flex flex-col gap-4 h-[90%] mt-8 mx-28'>
          <div className='bg-zinc-800 w-full h-40 p-6 rounded-md shadow-lg'>
            <div>
              <div className='flex gap-4'>
                <div className='bg-zinc-700 w-[25%] h-28 rounded-md shadow-lg transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer'>
                  <div className='flex flex-col justify-center items-center gap-2 h-full'>
                    <span className='text-zinc-400'>Pré processamento</span>
                    <span className='text-3xl font-bold text-white'>{`Média ${preprocessamentoAverage.toFixed(1)}s`}</span>
                  </div>
                </div>
  
                <div className='bg-zinc-700 w-[25%] h-28 rounded-md shadow-lg transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer'>
                  <div className='flex flex-col justify-center items-center gap-2 h-full'>
                    <span className='text-zinc-400'>Stopword</span>
                    <span className='text-3xl font-bold text-white'>{`Média ${stopwordAverage.toFixed(1)}s`}</span>
                  </div>
                </div>
  
                <div className='bg-zinc-700 w-[25%] h-28 rounded-md shadow-lg transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer'>
                  <div className='flex flex-col justify-center items-center gap-2 h-full'>
                    <span className='text-zinc-400'>Tokenização</span>
                    <span className='text-3xl font-bold text-white'>{`Média ${tokenizacaoAverage.toFixed(1)}s`}</span>
                  </div>
                </div>
  
                <div className='bg-zinc-700 w-[25%] h-28 rounded-md shadow-lg transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer'>
                  <div className='flex flex-col justify-center items-center gap-2 h-full'>
                    <span className='text-zinc-400'>Analise de sentimentos</span>
                    <span className='text-3xl font-bold text-white'>{`Média ${analiseSentimentosAverage.toFixed(1)}s`}</span>
                  </div>
                </div>
  
                <div className='bg-zinc-700 w-[25%] h-28 rounded-md shadow-lg transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer'>
                  <div className='flex flex-col justify-center items-center gap-2 h-full'>
                    <span className='text-zinc-400'>Classificação de tema</span>
                    <span className='text-3xl font-bold text-white'>{`Média ${classificacaoTemaAverage.toFixed(1)}s`}</span>
                  </div>
                </div>
  
                <div className='bg-zinc-700 w-[25%] h-28 rounded-md shadow-lg transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer'>
                  <div className='flex flex-col justify-center items-center gap-2 h-full'>
                    <span className='text-zinc-400'>Pesquisa PLN</span>
                    <span className='text-4xl font-bold text-white'>{`Média ${pesquisaPLNAverage.toFixed(1)}s`}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div className='bg-zinc-800 w-full h-full p-8 rounded-md shadow-lg'>
            <Chart
              options={options}
              series={options.series}
              width='100%'
              height='100%'
            />
          </div>
        </div>
      </div>
    )
  }