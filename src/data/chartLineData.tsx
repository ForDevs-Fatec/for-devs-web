import { EmptyChart } from "@/components/emptyChart";
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
  const [aggregatedData, setAggregatedData] = useState<{
    [key: string]: number;
  }>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      apiPln
        .get<LineChartData[]>(URI.GET_THEME_TIME)
        .then((response) => {
          const data = response.data;
          const dataNoNull = data.filter(
            (item) => item.classificacao_tema !== null
          );

          // Primeiro, criamos um objeto para armazenar nossos dados agregados
          const aggregated: { [key: string]: number } = {};

          // Em seguida, iteramos sobre a resposta da API
          dataNoNull.forEach((item) => {
            // Cria um objeto Date a partir da string de data
            const date = new Date(item.data);

            // Formata a data para o formato brasileiro
            const formattedDate = date.toLocaleDateString("pt-BR");

            // Criamos uma chave única combinando a data formatada e a classificação do tema
            const key = `${formattedDate}-${item.classificacao_tema}`;

            // Se a chave já existe no objeto agregado, somamos a quantidade
            // Se não, inicializamos com a quantidade do item atual
            aggregated[key] = (aggregated[key] || 0) + item.quantidade;
          });

          // Atualizamos o estado com os dados agregados
          setAggregatedData(aggregated);

          setDataLineChart(dataNoNull);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    }, 3000);
  }, []);

  const LineDataDate = [...new Set(dataLineChart.map((item) => item.data))];

  const DateGroup = LineDataDate.concat().sort();

  // Primeiro, criamos arrays vazios para cada série do gráfico
  const product: number[] = [];
  const delivery: number[] = [];
  const quality: number[] = [];
  // Em seguida, iteramos sobre as datas únicas em ordem
  DateGroup.forEach((date) => {
    // Cria um objeto Date a partir da string de data
    const formattedDate = new Date(date).toLocaleDateString("pt-BR");

    // Para cada data, obtemos a quantidade agregada para cada classificação de tema
    // Se não houver dados para uma data e classificação de tema específicas, usamos 0
    product.push(aggregatedData[`${formattedDate}-1`] || 0);
    delivery.push(aggregatedData[`${formattedDate}-2`] || 0);
    quality.push(aggregatedData[`${formattedDate}-3`] || 0);
  });

  const LineChartOptions: ApexCharts.ApexOptions = {
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
      },
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
      },
    },
    series: [
      {
        name: "Produto",
        data: product ? product : [],
        color: "#f23f42",
      },
      {
        name: "Entrega",
        data: delivery ? delivery : [],
        color: "#f0b232",
      },
      {
        name: "Qualidade (Custo-benefício)",
        data: quality ? quality : [],
        color: "#33f182",
      },
    ],
    legend: {
      position: "bottom",
      height: 50,
      offsetY: 10,
      labels: {
        colors: "#FFFFFF",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      title: {
        text: "Datas (2018)",
        style: {
          fontSize: "10px",
          fontWeight: "bold",
          color: "#8997ac",
        },
      },
      categories: ['17/05', '18/05', '19/05', '20/05', '21/05', '22/05', '23/05', '24/05', '25/05', '26/05', '27/05', '28/05', '29/05', '30/05', '31/05'],
      labels: {
        rotate: -45,
        style: {
          fontSize: "10px",
          colors: "#8997ac",
        },
      },
    },
    yaxis: {
      title: {
        text: "Quantidade de Avaliações",
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
          options={LineChartOptions}
          series={LineChartOptions.series}
          width="100%"
          height="100%"
          type="line"
        />
      )}
    </>
  );
}
