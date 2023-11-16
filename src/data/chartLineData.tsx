import apiPln from "@/services/api-pln.service";
import URI from "@/utils/enum/uri.enum";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

type LineChartData = {
  data: string;
  classificacao_tema: number;
  quantidade: number;
};

export function LineChartComponent() {
  const [dataLineChart, setDataLineChart] = useState<LineChartData[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => { 
    setLoading(true);

    setTimeout(() => {
      apiPln
        .get<LineChartData[]>(URI.GET_THEME_TIME)
        .then((response) => {
            const data = response.data;
            const dataNoNull = data.filter((item) => item.classificacao_tema !== null);
            setDataLineChart(dataNoNull);
            setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    }, 1500);
  }, []);

  console.log(dataLineChart)

  const LineDataDate = dataLineChart.map((item) => item.data);
  
  const DateGroup = LineDataDate.concat().sort().reverse();

  console.log(DateGroup)

  const LineDataFilterProduct = dataLineChart.filter(
    (item) => item.classificacao_tema === 1
  );
  const LineDataFilterDelivery = dataLineChart.filter(
    (item) => item.classificacao_tema === 2
  );
  const LineDataFilterQuality = dataLineChart.filter(
    (item) => item.classificacao_tema === 3
  );

  const product = LineDataFilterProduct.map((item) => item.quantidade);
  const delivery = LineDataFilterDelivery.map((item) => item.quantidade);
  const quality = LineDataFilterQuality.map((item) => item.quantidade);

  console.log(product)

  const LineChartOptions: ApexCharts.ApexOptions = {
  chart: {
    id: 'realtime',
    toolbar: {
      show: true,
    },
    animations: {
      enabled: true,
      easing: 'linear',
      dynamicAnimation: {
        speed: 1000
      }
    },
    zoom: {
      enabled: false
    }
  },
  series: [
    {
      name: "Produto",
      data: product ? product : [],
      color: "#F87171",
    },
    {
      name: "Entrega",
      data: [],
      color: "#FBBF24",
    },
    {
      name: "Qualidade (Custo-benefício)",
      data: [],
      color: "#34D399",
    },
  ],
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    colors: ["#F87171", "#FBBF24", "#34D399"],
  },
  fill: {
    type: "solid",
    opacity: 0.8,
    colors: ["#F87171", "#FBBF24", "#34D399"],
  },
  xaxis: {
    categories: LineDataDate,
    labels: {
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
  tooltip: {
    theme: "dark",
    y: {
      formatter: function (val: any) {
        return val;
      },
    },
  },
  legend: {
    position: "bottom",
    labels: {
      colors: "#FFFFFF",
    },
  },
  grid: {
    show: false,
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
          options={LineChartOptions}
          series={LineChartOptions.series}
          width="100%"
          height="100%"
          type="line"
        />
      )}
    </div>
  );
}
