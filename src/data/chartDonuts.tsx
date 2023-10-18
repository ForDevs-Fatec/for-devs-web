import apiPln from "@/services/api-pln.service";
import URI from "@/utils/enum/uri.enum";
import { useEffect, useState } from "react";
import Chart from 'react-apexcharts'

type DonutChartData = {
    classificacao_tema: number;
    quantidade: number;
};


export function DonutsChartComponent() {
    const [dataDonutChart, setDataDonutChart] = useState<DonutChartData[]>([]);

useEffect(() => {
    apiPln
        .get<DonutChartData[]>(URI.CLASSIFICACAO_TEMA_CONTAGEM)
        .then((response) => {
            const data = response.data;
            setDataDonutChart(data);
        })
        .catch((error) => {
            console.log(error);
        });
}, []);


const DonutChartOptions: ApexCharts.ApexOptions = {
    chart: {
        type: 'donut',
        toolbar: {
            show: true,
        }
    },
    title: {
        text: 'Quantidade de comentários por tema',
        align: 'left',
        style: {
            color: '#FFFFFF',
        }
    },
    series: [dataDonutChart[1]?.quantidade, dataDonutChart[3]?.quantidade, dataDonutChart[2]?.quantidade],
    labels: ['Produto', 'Entrega', 'Qualidade (Custo-benefício)'],
    legend: {
        position: 'right',
        labels: {
            colors: '#FFFFFF',
        },
    },
}

    return (
        <Chart
            options={DonutChartOptions}
            series={DonutChartOptions.series}
            width='100%'
            height='100%'
            type='donut'
        />
    )
}