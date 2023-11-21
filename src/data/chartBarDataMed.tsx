import { EmptyChart } from "@/components/emptyChart";
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

  console.log(dataBarMedChart[2].quantidade)

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
  series: [{
    name: 'Média',
    data: [dataBarMedChart[0].overall_rating, dataBarMedChart[1].overall_rating, dataBarMedChart[2].overall_rating],
    color: "#EB8242"
  }
],
  plotOptions: {
    bar: {
      borderRadius: 1.5,
      columnWidth: "25%",
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
          type="bar"
          width="100%"
          height="100%"
        />
      )}
    </>
  );
}
