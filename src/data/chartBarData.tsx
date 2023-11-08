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
        .get<BarChartData[]>(URI.CLASSIFICACAO_TEMA_SENTIMENTO)
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

  console.log(dataBarChart)

  const barDataPositive = dataBarChart.filter(
    (item) => item.sentiment_text === "positive"
  );
  const barDataNeutral = dataBarChart.filter(
    (item) => item.sentiment_text === "neutra"
  );
  const barDataNegative = dataBarChart.filter(
    (item) => item.sentiment_text === "negative"
  );

  const getAllDataPositive = barDataPositive.map((item) => item.quantidade);
  const getAllDataNeutral = barDataNeutral.map((item) => item.quantidade);
  const getAllDataNegative = barDataNegative.map((item) => item.quantidade);

  const BarChartOptions: ApexCharts.ApexOptions = {
    chart: {
      stacked: true,
      toolbar: {
        show: true,
      },
    },
    series: [
      {
        name: "Positivo",
        data: getAllDataPositive,
      },
      {
        name: "Neutro",
        data: getAllDataNeutral,
      },
      {
        name: "Negativo",
        data: getAllDataNegative,
      },
    ],
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
        barHeight: "50%",
      },
    },
    legend: {
      position: "bottom",
      labels: {
        colors: "#FFFFFF",
      },
    },
    xaxis: {
      categories: ["Produto", "Qualidade", "Entrega"],
      labels: {
        show: true,
        style: {
          colors: "#FFFFFF",
        },
      },
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: "#FFFFFF",
        },
      },
    },
    grid: {
      borderColor: '#424242',
    },
  };

  return (
    <div className="w-full h-full">
      {loading ? (
        <div className="flex items-center justify-center h-full w-full">
          <Loader2 className="animate-spin text-zinc-50" />
          <p className="text-zinc-50 ml-2">Carregando...</p>
        </div>
      ) : (
        <Chart
          options={BarChartOptions}
          series={BarChartOptions.series}
          width="100%"
          height="100%"
          type="bar"
        />
      )}
    </div>
  );
}
