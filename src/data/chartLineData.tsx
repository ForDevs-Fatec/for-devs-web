import { EmptyChart } from "@/components/emptyChart";
import apiPln from "@/services/api-pln.service";
import URI from "@/utils/enum/uri.enum";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

type LineChartData = {
  data: string;
  classificacao_tema: number;
  quantidade: number;
};

type SeriesData = {
  name: string;
  data: number[];
};

export function LineChartComponent() {
  const [dataLineChart, setDataLineChart] = useState<SeriesData[]>([]);
  const [datesChart, setDatesChart] = useState<LineChartData[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  
    setTimeout(() => {
      apiPln
        .get<LineChartData[]>(URI.GET_THEME_TIME)
        .then((response) => {
          const data = response.data;
  
          // Agrupar os dados por tema
          const groupedData = data.reduce((acc: Record<string, LineChartData[]>, curr) => {
            if (!acc[curr.classificacao_tema]) {
              acc[curr.classificacao_tema] = [];
            }
            acc[curr.classificacao_tema].push(curr);
            return acc;
          }, {});
  
          // Transformar os dados agrupados em séries para o gráfico
          const series: SeriesData[] = Object.keys(groupedData).map((theme) => {
            // Converte a primeira letra para maiúsculo
            const themeCapitalized = theme.charAt(0).toUpperCase() + theme.slice(1);
          
            return {
              name: themeCapitalized,
              data: groupedData[theme].map((item: LineChartData) => item.quantidade),
            };
          });
          
          setDatesChart(data);
          setDataLineChart(series);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    }, 3000);
  }, []);

  // Obter as datas únicas dos dados e formatá-las
  const dates = [...new Set(datesChart.map((item: LineChartData) => {
    const [year, month, day] = item.data.split('-');
    return `${day}-${month}`;
  }))].sort((a, b) => {
    const [dayA, monthA] = a.split('-').map(Number);
    const [dayB, monthB] = b.split('-').map(Number);
    return monthA - monthB || dayA - dayB;
  });
  
  const LineChartOptions: ApexCharts.ApexOptions = {
    chart: {
      background: "transparent",
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
    },
    theme: {
      mode: "dark",
    },
    tooltip: {
      theme: "dark",
      y: {
        formatter: function (val: number) {
          return val + " avaliações";
        },
      },
    },
    legend: {
      position: "bottom",
      height: 50,
      offsetY: 10,
      labels: {
        colors: "#FFFFFF",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    colors:  ["#f23f42", "#f0b232", "#33f182", "#3f8ff2", "#a83ff2"],
    xaxis: {
      categories: dates,
      title: {
        text: "Datas (2018)",
        style: {
          fontSize: "10px",
          fontWeight: "bold",
          color: "#8997ac",
        },
      },
      labels: {
        rotate: -45,
        style: {
          fontSize: "10px",
          colors: "#8997ac",
        },
      },
    },
    yaxis: {
      title: {
        text: "Quantidade de Avaliações",
        style: {
          fontSize: "10px",
          fontWeight: "bold",
          color: "#8997ac",
        },
      },
      labels: {
        show: true,
        style: {
          colors: "#8997ac"
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#8997ac",
    },
  };

  return (
    <>
      {loading ? (
        <EmptyChart />
      ) : (
        <Chart
          options={LineChartOptions}
          series={dataLineChart}
          width="100%"
          height="100%"
          type="line"
        />
      )}
    </>
  );
}
