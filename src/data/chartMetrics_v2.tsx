import apiPln from "@/services/api-pln.service";
import URI from "@/utils/enum/uri.enum";
import { Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import Chart from "react-apexcharts";

type MetricsPageProps = {
  função: string;
  tempo: number;
};

export function MetricsChartComponentV2() {
  const [dataTime, setDataTime] = useState<MetricsPageProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    
    setTimeout(() => {
      apiPln
        .get<MetricsPageProps[]>(URI.METRICAS)
        .then((response) => {
          const data = response.data;

          setDataTime(data);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          console.log(error);
        });
    }, 1000);
  }, []);


  const sentimentoFilterNull = dataTime.filter((item) => item.função === "sentimento" && item.tempo !== 0);
  const classificacaoFilterNull = dataTime.filter((item) => item.função === "class_tema" && item.tempo!== 0);


  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    series: [
      
      {
        name: "Analise de sentimentos",
        data: [
            sentimentoFilterNull.map((item) => Math.round(item.tempo * 1000) / 1000)[0],
            sentimentoFilterNull.map((item) => Math.round(item.tempo * 1000) / 1000)[1],
            sentimentoFilterNull.map((item) => Math.round(item.tempo * 1000) / 1000)[2],
            sentimentoFilterNull.map((item) => Math.round(item.tempo * 1000) / 1000)[3],
            sentimentoFilterNull.map((item) => Math.round(item.tempo * 1000) / 1000)[4],
            sentimentoFilterNull.map((item) => Math.round(item.tempo * 1000) / 1000)[5],
            sentimentoFilterNull.map((item) => Math.round(item.tempo * 1000) / 1000)[6],
        ],
        color: "#60A5FA",
      },
      {
        name: "Classificação de tema",
        data: [
            classificacaoFilterNull.map((item) => Math.round(item.tempo * 1000) / 1000)[0],
            classificacaoFilterNull.map((item) => Math.round(item.tempo * 1000) / 1000)[1],
            classificacaoFilterNull.map((item) => Math.round(item.tempo * 1000) / 1000)[2],
            classificacaoFilterNull.map((item) => Math.round(item.tempo * 1000) / 1000)[3],
            classificacaoFilterNull.map((item) => Math.round(item.tempo * 1000) / 1000)[4],
            classificacaoFilterNull.map((item) => Math.round(item.tempo * 1000) / 1000)[5],
            classificacaoFilterNull.map((item) => Math.round(item.tempo * 1000) / 1000)[6],
        ], 
        color: "#f8a581",
      },
    ],
    fill: {
      type: "solid",
      opacity: 0.8,
      colors: [
        "#60A5FA",
        "#f8a581",
      ],
    },
    stroke: {
      curve: "smooth",
      colors: [
        "#60A5FA",
        "#f8a581",
      ],
    },
    xaxis: {
      categories: [
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sabado",
        "Domingo",
      ],
      labels: {
        style: {
          colors: "#FFFFFF",
          fontSize: "12px",
          fontFamily: "Roboto, sans-serif",
          fontWeight: 400,
          cssClass: "apexcharts-xaxis-label",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#FFFFFF",
          fontSize: "12px",
          fontFamily: "Roboto, sans-serif",
          fontWeight: 400,
          cssClass: "apexcharts-xaxis-label",
        },
      },
    },
    tooltip: {
      theme: "dark",
      y: {
        formatter: function (val: number) {
          return val + "s";
        },
      },
    },
    legend: {
      labels: {
        colors: "#FFFFFF",
      },
      position: "right",
      horizontalAlign: "center",
    },
  };

  return (
    <div className="w-full h-full">
      {isLoading ? (
        <div className="flex items-center justify-center h-full w-full">
          <Loader2 className="animate-spin text-zinc-50" />
          <p className="text-zinc-50 ml-2">Carregando...</p>
        </div>
      ) : (
        <Chart
          options={options}
          series={options.series}
          width="100%"
          height="100%"
        />
      )}
    </div>
  );
}
