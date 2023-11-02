import apiPln from "@/services/api-pln.service";
import URI from "@/utils/enum/uri.enum";
import { Item } from "@radix-ui/react-dropdown-menu";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

type BarAgeRangeChartProps = {
  reviewer_birth_year: number;
  classificacao_tema: number;
  quantidade: number;
  sentimento_text: string;
};

export function BarAgeRangeChartComponent() {
  const [dataBar, setDataBar] = useState<BarAgeRangeChartProps[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      apiPln
        .get<BarAgeRangeChartProps[]>(URI.DISTRIBUICAO_SENTIMENTOS_FAIXA_ETARIA_TEMA)
        .then((response) => {
          const data = response.data;
          const filterNullData = data.filter((item) => item.reviewer_birth_year !== null && item.reviewer_birth_year !== 0);

          setDataBar(filterNullData);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    }, 1000);
  }, []);

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
        data: [1, 2, 3],
      },
      {
        name: "Neutro",
        data: [1, 2, 3],
      },
      {
        name: "Negativo",
        data: [1, 2, 3]
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
