import Chart from 'react-apexcharts'

import { SectionWrapperGrid_1, SectionWrapperGrid_2, SectionWrapperGrid_3, SectionWrapperGrid_4, SectionWrapperGrid_5, SectionWrapperGrid_6, SectionWrapperGrid_7, SectionWrapperGrid_8, SectionWrapperGrid_9 } from './styles'

/*Line chart data*/
const OptionsChartLine: ApexCharts.ApexOptions = {
    chart: {
        type: "line",
        stacked: false,
    },
    stroke: {
        curve: 'smooth',
    },
    tooltip: {
        theme: 'dark'
    },
   
    grid: {
        borderColor: "#535A6C",
    },
    series: [
        {
            name: "Sales",
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
        }
    ],
    title: {
        text: "Logarithmic Scale",
        align: "left"
      },
    xaxis: {
        categories: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        title: {
            text: 'teste'
        }
    }
};

const SeriesChartLine = [
    {
        name: "Sales",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    }
];

/*Bar chart data*/
const OptionsChartBar: ApexCharts.ApexOptions = {
    chart: {
        type: 'bar'
    },
    plotOptions: {
        bar: {
            horizontal: false
        }
    },
    tooltip: {
        theme: 'dark'
    },
    series: [{
        data: [{
            x: 'category A',
            y: 10
        }, {
            x: 'category B',
            y: 18
        }, {
            x: 'category C',
            y: 13
        }]
    }]
};

/*Pie chart data*/
const OptionsChartPie: ApexCharts.ApexOptions = {
    chart: {
        type: 'pie',
    },
    tooltip: {
        theme: 'dark'
    },
    legend: {
        labels: {
            colors: '#fff'
        }
    },
    labels: ['Apple', 'Mango', 'Orange', 'Watermelon']
}

const SeriesChartPie = [30, 40, 35, 50, 49, 60, 70, 91, 125]

/*Scatter chart data*/
const OptionsChartScatter: ApexCharts.ApexOptions = {
    chart: {
      type: 'scatter',
    },
    tooltip: {
      theme: 'dark',
    },
    xaxis: {
      labels: {
        style: {
          colors: ['#FFA500', '#008000', '#0000FF', '#FF0000', '#800080', '#FFFF00', '#FF00FF', '#00FFFF', '#FF4500'],
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: ['#FFA500', '#008000', '#0000FF', '#FF0000', '#800080', '#FFFF00', '#FF00FF', '#00FFFF', '#FF4500'],
        },
      },
    },
  };
  
  const SeriesChartScatter = [
    {
      name: 'Series 1',
      data: [
        [10, 20], [20, 35], [30, 10], [40, 50], [50, 30], [60, 70], [70, 50], [80, 80], [90, 90]
      ],
    },
    {
      name: 'Series 2',
      data: [
        [15, 25], [25, 30], [35, 15], [45, 55], [55, 35], [65, 75], [75, 55], [85, 85], [95, 65]
      ],
    },
    {
      name: 'Series 3',
      data: [
        [10, 10], [20, 20], [30, 30], [40, 40], [50, 50], [60, 60], [70, 70], [80, 80], [90, 90]
      ],
    },
    {
      name: 'Series 4',
      data: [
        [5, 15], [15, 25], [25, 35], [35, 45], [45, 55], [55, 65], [65, 75], [75, 85], [85, 95]
      ],
    },
    {
      name: 'Series 5',
      data: [
        [90, 10], [80, 20], [70, 30], [60, 40], [50, 50], [40, 60], [30, 70], [20, 80], [10, 90]
      ],
    },
  ];

export function DashboardCharts() {
    return (
        <>
            <SectionWrapperGrid_1>
                <Chart
                    options={OptionsChartLine}
                    series={SeriesChartLine}
                    type='line'
                    width='100%'
                    height='100%'
                />
            </SectionWrapperGrid_1>

            <SectionWrapperGrid_2>
                <Chart
                    options={OptionsChartLine}
                    series={SeriesChartLine}
                    type='line'
                    width='100%'
                    height='100%'
                />
            </SectionWrapperGrid_2>

            <SectionWrapperGrid_3>
                <Chart
                    options={OptionsChartLine}
                    series={SeriesChartLine}
                    type='line'
                    width='100%'
                    height='100%'
                />
            </SectionWrapperGrid_3>

            <SectionWrapperGrid_4>
                <Chart
                    options={OptionsChartLine}
                    series={SeriesChartLine}
                    type='line'
                    width='100%'
                    height='100%'
                />
            </SectionWrapperGrid_4>

            <SectionWrapperGrid_5>
                <Chart
                    options={OptionsChartBar}
                    series={SeriesChartLine}
                    type='bar'
                    width='100%'
                    height='100%'
                />
            </SectionWrapperGrid_5>

            <SectionWrapperGrid_6>
                <Chart
                    options={OptionsChartBar}
                    series={SeriesChartLine}
                    type='bar'
                    width='100%'
                    height='100%'
                />
            </SectionWrapperGrid_6>

            <SectionWrapperGrid_7>
                <Chart
                    options={OptionsChartPie}
                    series={SeriesChartPie}
                    type='pie'
                    width='100%'
                    height='100%'
                />
            </SectionWrapperGrid_7>

            <SectionWrapperGrid_8>
                <Chart
                    options={OptionsChartLine}
                    series={SeriesChartLine}
                    type='line'
                    width='100%'
                    height='100%'
                />
            </SectionWrapperGrid_8>

            <SectionWrapperGrid_9>
                <Chart
                    options={OptionsChartScatter}
                    series={SeriesChartScatter}
                    type='scatter'
                    width='100%'
                    height='100%'
                />
            </SectionWrapperGrid_9>
        </>
    )
}