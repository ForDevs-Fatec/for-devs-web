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
        .get<DonutChartData[]>(URI.CLASSIFICACAO_TEMA_CONTAGEM)
        .then((response) => {
          const data = response.data;
          setDataDonutChart(data);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    }, 2000);
  }, []);

  const DonutChartOptions: ApexCharts.ApexOptions = {
    chart: {
      toolbar: {
        show: true,
      },
    },
    series: [
      dataDonutChart.length > 0 ? dataDonutChart[0]?.quantidade : 0,
      dataDonutChart.length > 1 ? dataDonutChart[1]?.quantidade : 0,
      dataDonutChart.length > 2 ? dataDonutChart[2]?.quantidade : 0,
    ],
    labels: ["Produto", "Entrega", "Qualidade (Custo-benefício)"],
    legend: {
      position: "bottom",
      labels: {
        colors: "#FFFFFF",
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
          options={DonutChartOptions}
          series={DonutChartOptions.series}
          width="100%"
          height="100%"
          type="donut"
        />
      )}
    </div>
  );
}
