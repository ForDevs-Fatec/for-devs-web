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
    setTimeout(() => {
      setLoading(true);
      apiPln
        .get<BarChartData[]>(URI.CLASSIFICACAO_TEMA_SENTIMENTO)
        .then((response) => {
          const barData = response.data;
          const barDataNoNull = barData.filter(
            (item) =>
              item.classificacao_tema !== null && item.classificacao_tema !== 1
          );
          setLoading(false);
          setDataBarChart(barDataNoNull);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    }, 500);
  }, []);

  const barDataPositive = dataBarChart.filter(
    (item) => item.sentiment_text === "positive"
  );
  const barDataNeutral = dataBarChart.filter(
    (item) => item.sentiment_text === "neutral"
  );
  const barDataNegative = dataBarChart.filter(
    (item) => item.sentiment_text === "negative"
  );

  const getAllDataPositive = barDataPositive.map((item) => item.quantidade);
  const getAllDataNeutral = barDataNeutral.map((item) => item.quantidade);
  const getAllDataNegative = barDataNegative.map((item) => item.quantidade);

  console.log(dataBarChart);

  const BarChartOptions: ApexCharts.ApexOptions = {
    chart: {
      stacked: true,
      toolbar: {
        show: true,
      },
    },
    title: {
      text: "Sentimentos por tema",
      align: "left",
      style: {
        color: "#FFFFFF",
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
        horizontal: false,
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
        style: {
          colors: "#FFFFFF",
        },
      },
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
