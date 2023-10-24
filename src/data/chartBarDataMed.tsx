import apiPln from "@/services/api-pln.service";
import URI from "@/utils/enum/uri.enum";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

type BarMedChartProps = {
  classificacao_tema: number;
  quantidade: number;
  overall_rating: number;
};

export function BarMedChartComponent() {
  const [dataBarMedChart, setDataBarMedChart] = useState<BarMedChartProps[]>(
    []
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
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
    }, 1000);
  }, []);

  console.log(dataBarMedChart);

  const getAllData2 = dataBarMedChart.map((item) =>
    item.classificacao_tema === 2 ? item.overall_rating : 0
  );
  const getAllData3 = dataBarMedChart.map((item) =>
    item.classificacao_tema === 3 ? item.overall_rating : 0
  );
  const getAllData4 = dataBarMedChart.map((item) =>
    item.classificacao_tema === 4 ? item.overall_rating : 0
  );

  console.log(getAllData4);

  const BarChartOptions: ApexCharts.ApexOptions = {
    series: [
      {
        data: [getAllData2[1], getAllData3[2], getAllData4[3]],
      },
    ],
    title: {
      text: "Média de avaliação por tema",
      align: "left",
      style: {
        color: "#FFFFFF",
      },
    },
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
      },
    },
    dataLabels: {
      enabled: false,
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
          type="bar"
          options={BarChartOptions}
          series={BarChartOptions.series}
          width="100%"
          height="100%"
        />
      )}
    </div>
  );
}
