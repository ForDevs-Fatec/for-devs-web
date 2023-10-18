import apiPln from "@/services/api-pln.service";
import URI from "@/utils/enum/uri.enum";
import { useEffect, useState } from "react";
import Chart from 'react-apexcharts'

type BarChartData = {
    classificacao_tema: number;
    sentiment_text: string;
    quantidade: number;
}

export function ChartBarComponent() {
    const [dataBarChart, setDataBarChart] = useState<BarChartData[]>([]);

    useEffect(() => {
        apiPln.get<BarChartData[]>(URI.CLASSIFICACAO_TEMA_SENTIMENTO)
            .then((response) => {
                const barData = response.data;
                const barDataNoNull = barData.filter((item) => item.classificacao_tema !== null);
                setDataBarChart(barDataNoNull);
            }).catch((error) => {
                console.log(error);
            })
    }, [])

    const barDataPositive = dataBarChart.filter((item) => item.sentiment_text === 'Positivo');
    const barDataNeutral = dataBarChart.filter((item) => item.sentiment_text === 'Neutro');
    const barDataNegative = dataBarChart.filter((item) => item.sentiment_text === 'Negativo');

    const getAllDataPositive = barDataPositive.map((item) => item.quantidade);
    const getAllDataNeutral = barDataNeutral.map((item) => item.quantidade);
    const getAllDataNegative = barDataNegative.map((item) => item.quantidade);



    const BarChartOptions: ApexCharts.ApexOptions = {
        chart: {
            stacked: true,
            toolbar: {
                show: true,
            }
        },
        title: {
            text: 'Sentimentos por tema',
            align: 'left',
            style: {
                color: '#FFFFFF',
            }
        },
        series: [
            {
                name: 'Positivo',
                data: getAllDataPositive,
            },
            {
                name: 'Neutro',
                data: getAllDataNeutral,
            },
            {
                name: 'Negativo',
                data: getAllDataNegative,
            },
        ],
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 8,
            },
        },
        legend: {
            position: 'bottom',
            labels: {
                colors: '#FFFFFF',
            },
        },
        xaxis: {
            categories: ['Produto', 'Qualidade', 'Entrega'],
            labels: {
                style: {
                    colors: '#FFFFFF',
                },
            },
        },
    }
    return (
        <Chart
            options={BarChartOptions}
            series={BarChartOptions.series}
            width='100%'
            height='100%'
            type='bar'
        />
    );
}
