import { EmptyChart } from "@/components/emptyChart";
import apiPln from "@/services/api-pln.service";
import URI from "@/utils/enum/uri.enum";
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
        .get<BarChartData[]>(URI.GET_THEME_SENTIMENT)
        .then((response) => {
          const data = response.data

          setDataBarChart(data);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    }, 1000);
  }, []);

  const barDataPositive = dataBarChart.filter(
    (item) => item.sentiment_text === "positive"
  );
  // const barDataNeutral = dataBarChart.filter(
  //   (item) => item.sentiment_text === "neutra" 
  // );
  const barDataNegative = dataBarChart.filter(
    (item) => item.sentiment_text === "negative"
  );

  const getAllDataPositive = barDataPositive.map((item) => item.quantidade || 0);
  // const getAllDataNeutral = barDataNeutral.map((item) => item.quantidade || 0);
  const getAllDataNegative = barDataNegative.map((item) => item.quantidade || 0);

  const BarChartOptions: ApexCharts.ApexOptions = {
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
      }
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
        data: getAllDataPositive,
        color: "#33f182",
      },
      {
        name: "Negativo",
        data: getAllDataNegative,
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
      title: {
        text: "Temas",
        style: {
          fontSize: "10px",
          fontWeight: "bold",
          color: "#8997ac",
        },
      },
      categories: ["Produto", "Qualidade", "Entrega"],
      labels: {
        show: true,
        style: {
          colors: "#8997ac"
        },
      },
      axisBorder: {
        color: "#8997ac"
      },
      axisTicks: {
        color: "#8997ac"
      }
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
