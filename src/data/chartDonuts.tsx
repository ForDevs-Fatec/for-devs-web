import { EmptyChart } from "@/components/emptyChart";
import apiPln from "@/services/api-pln.service";
import URI from "@/utils/enum/uri.enum";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

type DonutChartData = {
  classificacao_tema: number;
  quantidade: number;
};

export function DonutsChartComponent() {
  const [dataDonutChart, setDataDonutChart] = useState<DonutChartData[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    
    setTimeout(() => {
      apiPln
        .get<DonutChartData[]>(URI.GET_THEME_COUNT)
        .then((response) => {
          const data = response.data;
          setDataDonutChart(data);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    }, 4000);
  }, []);

  const DonutChartOptions: ApexCharts.ApexOptions = {
    chart: {
      toolbar: {
        show: true,
      },
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
    series: [
      dataDonutChart.length > 0 ? dataDonutChart[0]?.quantidade : 0,
      dataDonutChart.length > 1 ? dataDonutChart[1]?.quantidade : 0,
      dataDonutChart.length > 2 ? dataDonutChart[2]?.quantidade : 0,
    ],
    labels: ["Produto", "Entrega", "Qualidade (Custo-benefício)"],
    colors: ["#f0b232", "#33f182", "#f23f42"],
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
          options={DonutChartOptions}
          series={DonutChartOptions.series}
          width="100%"
          height="100%"
          type="donut"
        />
      )}
    </>
  );
}
