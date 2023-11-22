import { EmptyChart } from "@/components/emptyChart";
import apiPln from "@/services/api-pln.service";
import URI from "@/utils/enum/uri.enum";
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


  const getAllData = dataBarMedChart.map((item) => item.overall_rating || 0);
  
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
          return val + " média";
        },
      },
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
        text: "Média de Avaliações",
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
  series: [
    {
      name: "Média avaliações",
      data: getAllData,
      color: "#EB8242"
    },
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
  grid: {
    show: true,
    borderColor: "#8997ac",
  },
};

  return (
    <div className='w-full h-full'>
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
    </div>
  );
}
