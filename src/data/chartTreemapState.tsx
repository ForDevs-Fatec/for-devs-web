import { EmptyChart } from "@/components/emptyChart";
import apiPln from "@/services/api-pln.service";
import URI from "@/utils/enum/uri.enum";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

type ApiData = {
  estado: string,
  classificacao_tema: string,
  sentimento_text: string,
  quantidade: number
};

type TreemapChartData = {
  estado: string,
  positive?: number,
  neutral?: number,
  negative?: number
};

export function ChartTreemapComponent() {
  const [dataTreemapChart, setDataTreemapChart] = useState<TreemapChartData[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      apiPln
        .get<ApiData[]>(URI.GET_THEME_UF)
        .then((response) => {
          const data = response.data;

          // Crie um objeto para armazenar os totais
          let totals: Record<string, any> = {};

          // Percorra cada item nos dados
          data.forEach(item => {
            // Crie uma chave única para cada estado
            let key = item.estado;

            // Se a chave ainda não existir no objeto totals, adicione-a
            if (!totals[key]) {
              totals[key] = {
                estado: item.estado,
                positive: 0,
                neutral: 0,
                negative: 0
              };
            }

            // Adicione a quantidade ao total apropriado com base no sentimento
            totals[key][item.sentimento_text] += item.quantidade;
          });

          // Converta o objeto totals de volta para um array
          let dataArray = Object.values(totals);

          // Filtre os itens onde o estado é "Não informado"
          dataArray = dataArray.filter(item => item.estado !== "Não informado");

          // Defina dataArray como os dados do gráfico
          setDataTreemapChart(dataArray);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    }, 5200);
  }, []);

  const TreemapChartOptions: ApexCharts.ApexOptions = {
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
        data: dataTreemapChart.map((item) => ({
          x: item.estado,
          y: (item.positive || 0) + (item.neutral || 0) + (item.negative || 0),
          color: (item.positive || 0) + (item.neutral || 0) + (item.negative || 0),
        })),
      },
    ],
    legend: {
      show: false,
    },
    plotOptions: {
      treemap: {
        distributed: true,
        enableShades: false,
      },
    },
    colors: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"],
    dataLabels: {
      textAnchor: "middle"
    }
  };

  return (
    <>
      {loading ? (
        <EmptyChart />
      ) : (
        <Chart
          options={TreemapChartOptions}
          series={TreemapChartOptions.series}
          width="100%"
          height="100%"
          type="treemap"
        />
      )}
    </>
  );
}