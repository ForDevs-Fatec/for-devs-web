import apiPln from "@/services/api-pln.service";
import URI from "@/utils/enum/uri.enum";
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
          const data = response.data; const filterNullData = data.filter((item) => item.reviewer_birth_year !== null && item.reviewer_birth_year !== 0);

          setDataBar(filterNullData);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    }, 1000);

  }, []);

  // Função para agrupar os dados por faixa etária e sentimento
  function groupByAgeAndSentiment(data: BarAgeRangeChartProps[]) {
    // Cria um objeto vazio para armazenar os dados agrupados
    const groupedData: Record<string, Record<string, number>> = {};
    // Define as faixas etárias
    const ageRanges = ["0-19", "20-59", "60+"];
    // Itera sobre os dados
    for (const item of data) {
      // Obtém o ano de nascimento do cliente
      const birthYear = item.reviewer_birth_year;
      // Obtém o sentimento do texto
      const sentiment = item.sentimento_text;
      // Obtém a quantidade de comentários
      const quantity = item.quantidade;
      // Calcula a idade do cliente
      const age = new Date().getFullYear() - birthYear;
      // Determina a faixa etária do cliente
      let ageRange = "";
      if (age >= 0 && age <= 19) {
        ageRange = "0-19";
      } else if (age >= 20 && age <= 59) {
        ageRange = "20-59";
      } else if (age >= 60) {
        ageRange = "60+";
      }
      // Verifica se a faixa etária já existe no objeto groupedData
      if (groupedData[ageRange]) {
        // Verifica se o sentimento já existe na faixa etária
        if (groupedData[ageRange][sentiment]) {
          // Incrementa a quantidade de comentários pelo sentimento na faixa etária
          groupedData[ageRange][sentiment] += quantity;
        } else {
          // Cria o sentimento na faixa etária e atribui a quantidade de comentários
          groupedData[ageRange][sentiment] = quantity;
        }
      } else {
        // Cria a faixa etária no objeto groupedData e inicializa o sentimento com a quantidade de comentários
        groupedData[ageRange] = {
          [sentiment]: quantity
        };
      }
    }
    // Retorna o objeto groupedData
    return groupedData;
  }

  // Invoca a função groupByAgeAndSentiment com os dados do dataBar
  const groupedData = groupByAgeAndSentiment(dataBar);

  // Extrai os dados da série do gráfico de barras empilhado a partir do objeto groupedData
  const barDataPositive: number[] = [];
  const barDataNeutral: number[] = [];
  const barDataNegative: number[] = [];

  for (const ageRange in groupedData) {
    barDataPositive.push(groupedData[ageRange].positive || 0);
    barDataNeutral.push(groupedData[ageRange].neutral || 0);
    barDataNegative.push(groupedData[ageRange].negative || 0);
  }

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
        data: barDataPositive,
      },
      {
        name: "Neutro",
        data: barDataNeutral,
      },
      {
        name: "Negativo",
        data: barDataNegative,
      },
    ],
    plotOptions: {
      bar: {
        borderRadius: 4, horizontal: true, barHeight: "50 %",
      },
    }, legend: { position: "bottom", labels: { colors: "#FFFFFF", }, }, xaxis: { categories: ["0 - 19", "20 - 59", "60 +"], labels: { show: true, style: { colors: "#FFFFFF", }, }, }, yaxis: { labels: { show: true, style: { colors: "#FFFFFF", }, }, }, grid: { borderColor: "#424242", },
  };

  return (
    <div className="w-full h-full">
      {loading ? (
        <div className="flex items-center justify-center h-full w-full">
          <Loader2 className="animate-spin text-zinc-50" />
          <p className="text-zinc-50 ml-2">Carregando…</p>
        </div >
      )
        :
        (
          <Chart
            type="bar"
            options={BarChartOptions}
            series={BarChartOptions.series}
            width="100%"
            height="100%"
          />
        )
      }
    </div>
  );
}
