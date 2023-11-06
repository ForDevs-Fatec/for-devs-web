import apiPln from "@/services/api-pln.service";
import URI from "@/utils/enum/uri.enum";
import { useEffect, useState } from "react";
import Chart from 'react-apexcharts';

type LineChartData = {
    data: string;  // Ajustado para string se 'data' for uma string de data
    classificacao_tema: number;
    quantidade: number;
};

export function LineChartComponent() {
    const [dataLineChart, setDataLineChart] = useState<LineChartData[]>([]);

useEffect(() => {
    apiPln.get<LineChartData[]>(URI.CLASSIFICACAO_TEMA_TEMPO)
        .then((response) => {
            const data = response.data;
            const dataNoNull = data.filter((item) => item.classificacao_tema !== null);
            console.log(dataNoNull);
            setDataLineChart(dataNoNull);
        })
        .catch((error) => {
            console.log(error);
        });
}, []);

const LineDataDate = dataLineChart.map((item) => item.data);
const DateGroup = LineDataDate.concat().sort().reverse().filter((item, index, array) => array.indexOf(item) === index).reverse();
const LineDataTheme = dataLineChart.map((item) => item.classificacao_tema);
const LineDataAmount = dataLineChart.map((item) => item.quantidade);

const LineDataFilter = dataLineChart.filter((item) => item.classificacao_tema === 2);
const LineDataFilter2 = dataLineChart.filter((item) => item.classificacao_tema === 4);
const LineDataFilter3 = dataLineChart.filter((item) => item.classificacao_tema === 3);

const teste = LineDataFilter.map((item) => item.quantidade);
const teste2 = LineDataFilter2.map((item) => item.quantidade);
const teste3 = LineDataFilter3.map((item) => item.quantidade);

const LineChartOptions: ApexCharts.ApexOptions = {
    chart: {
        type: 'line',
        toolbar: {
            show: true,
        }
    },
    title: {
        text: 'Distribuição de temas ao longo do tempo',
        align: 'left',
        style: {
            color: '#FFFFFF',
        }
    },
    dataLabels: {
        enabled: false
    },
    series: [
        {
            name: 'Produto',
            data: teste ? teste : [],
            color: '#F87171',
        },
        {
            name: 'Entrega',
            data: teste2 ? teste2 : [],
            color: '#FBBF24',
        },
        {
            name: 'Qualidade (Custo-benefício)',
            data: teste3 ? teste3 : [],
            color: '#34D399',
        },
    ],
    fill: {
        type: "solid",
        opacity: 0.8,
        colors: ['#F87171', '#FBBF24', '#34D399'],
    },
    stroke: {
        curve: 'smooth',
        colors: ['#F87171', '#FBBF24', '#34D399'],
    },
    xaxis: {
        categories: DateGroup,
        labels: {
            style: {
                colors: '#FFFFFF',
            },
        },
    },
    tooltip: {
        theme: 'dark',
        y: {
            formatter: function (val: any) {
                return val
            }
        },
    },
    legend: {
        position: 'bottom',
        labels: {
            colors: '#FFFFFF',
        },
    },
    grid: {
        show: false,
    }
}

    return (
        <Chart
            options={LineChartOptions}
            series={LineChartOptions.series}
            width='100%'
            height='100%'
            type='line'
        />
    )
}