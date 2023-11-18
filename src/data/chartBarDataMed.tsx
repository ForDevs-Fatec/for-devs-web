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
    }, 2500);
  }, []);

  const getAllDataProduct = dataBarMedChart.map((item) =>
    item.classificacao_tema === 1 ? item.overall_rating : 0
  );
  const getAllDataDelivery = dataBarMedChart.map((item) =>
    item.classificacao_tema === 2 ? item.overall_rating : 0
  );
  const getAllDataQuality = dataBarMedChart.map((item) =>
    item.classificacao_tema === 3 ? item.overall_rating : 0
  );

  const dataFilterProduct = getAllDataProduct.filter((item) => item !== 0);
  const dataFilterDelivery = getAllDataDelivery.filter((item) => item!== 0);
  const dataFilterQuality = getAllDataQuality.filter((item) => item!== 0);

  const BarChartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      height: 350,
    },
    series: [{
      data: [
        {
          x: "Produto",
          y: dataFilterProduct.length > 0 ? dataFilterProduct[0] : null,
        },
        {
          x: "Qualidade",
          y: dataFilterQuality.length > 0 ? dataFilterQuality[0] : null,
        },
        {
          x: "Entrega",
          y: dataFilterDelivery.length > 0 ? dataFilterDelivery[0] : null,
        }
      ]
    }],
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
        columnWidth: "50%"
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
        formatter: function (val: number) {
          return val + " avaliações";
        },
      }
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
