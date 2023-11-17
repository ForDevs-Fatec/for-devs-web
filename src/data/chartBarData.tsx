import { EmptyChart } from "@/components/emptyChart";
import apiPln from "@/services/api-pln.service";
import URI from "@/utils/enum/uri.enum";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

type BarChartData = {
  classificacao_tema: number;
  sentiment_text: string;
  quantidade: number;
};

export function ChartBarComponent() {
  const [dataBarChart, setDataBarChart] = useState<BarChartData[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      apiPln
        .get<BarChartData[]>(URI.GET_SENTIMENT_THEME)
        .then((response) => {
          const data = response.data
          setDataBarChart(data);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    }, 1300);
  }, []);

  const barDataPositive = dataBarChart.filter(
    (item) => item.sentiment_text === "positive"
  );
  const barDataNeutral = dataBarChart.filter(
    (item) => item.sentiment_text === "neutra" 
  );
  const barDataNegative = dataBarChart.filter(
    (item) => item.sentiment_text === "negative"
  );

  const getAllDataPositive = barDataPositive.map((item) => item.quantidade || 0);
  const getAllDataNeutral = barDataNeutral.map((item) => item.quantidade || 0);
  const getAllDataNegative = barDataNegative.map((item) => item.quantidade || 0);

  const BarChartOptions: ApexCharts.ApexOptions = {
    chart: {
      background: "transparent",
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
      }
    },
    series: [
      {
        name: "Positivo",
        data: [getAllDataPositive[0], getAllDataPositive[1], getAllDataPositive[2]],
        color: "#33f182",
      },
      // {
      //   name: "Neutro",
      //   data: [getAllDataNeutral[0], getAllDataNeutral[1], getAllDataNeutral[2]],
      //   color: "#f0b232",
      // },
      {
        name: "Negativo",
        data: [getAllDataNegative[0], getAllDataNegative[1], getAllDataNegative[2]],
        color: "#f23f42",
      },
    ],
    plotOptions: {
      bar: {
        borderRadius: 1.5,
        horizontal: false,
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
      enabled: true,
      style: {
        fontSize: "10px",
        fontWeight: "bold",
        colors: ["#FFFFFF"]
      }
    },
    xaxis: {
      categories: ["Produto", "Qualidade", "Entrega"],
      labels: {
        show: true,
        style: {
          colors: "#8997ac",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      }
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    grid: {
      show: false,
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
          width="100%"
          height="100%"
          type="bar"
        />
      )}
    </>
  );
}
