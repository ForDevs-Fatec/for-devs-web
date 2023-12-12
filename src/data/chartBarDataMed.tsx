import { EmptyChart } from "@/components/emptyChart";
import apiPln from "@/services/api-pln.service";
import URI from "@/utils/enum/uri.enum";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

type BarMedChartProps = {
  classificacao_tema: string;
  quantidade: number;
  overall_rating: number;
};

export function BarMedChartComponent() {
  const [dataBarMedChart, setDataBarMedChart] = useState<BarMedChartProps[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      apiPln
        .get<BarMedChartProps[]>(URI.MEDIA_TEMAS)
        .then((response) => {
          const data = response.data;
          setDataBarMedChart(data);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    }, 5000);
  }, []);

  const BarChartOptions: ApexCharts.ApexOptions = {
    chart: {
      background: "transparent",
      foreColor: "#ffffff",
      toolbar: {
        show: true,
      },
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
      }
    },
    tooltip: {
      theme: "dark",
      y: {
        formatter: function (val: number) {
          return val + " pontos";
        },
      }
    },
    series: [
      {
        name: "Nota média",
        data: [
          dataBarMedChart.length > 0 ? dataBarMedChart[0]?.overall_rating : 0,
          dataBarMedChart.length > 0 ? dataBarMedChart[1]?.overall_rating : 0,
          dataBarMedChart.length > 0 ? dataBarMedChart[2]?.overall_rating : 0,
          dataBarMedChart.length > 0 ? dataBarMedChart[3]?.overall_rating : 0,
          dataBarMedChart.length > 0 ? dataBarMedChart[4]?.overall_rating : 0,
        ],
      }
    ],
    labels: ["Qualidade", "Produto", "Recomendação", "Entrega", "Expectativa"],
    colors: ["#f23f42", "#f0b232", "#33f182", "#3f8ff2", "#a83ff2"],
    legend: {
      position: "bottom",
      labels: {
        colors: "#FFFFFF",
      },
    },
  };

  return (
    <>
      {loading ? (
        <EmptyChart />
      ) : (
        <Chart
          options={BarChartOptions}
          series={BarChartOptions.series}
          type="radar"
          width="100%"
          height="100%"
        />
      )}
    </>
  );
}