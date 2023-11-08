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
    setLoading(true);

    setTimeout(() => {
      apiPln
        .get<BarAgeRangeChartProps[]>(URI.DISTRIBUICAO_FAIXA_ETARIA)
        .then((response) => {
          const data = response.data;
          const dataFilterNull = data.filter((item) => item.reviewer_birth_year !== 0)

          setDataBar(dataFilterNull);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    }, 1000);

  }, []);

  console.log(dataBar);

  function groupByAgeAndSentiment(data: BarAgeRangeChartProps[]) {
    const groupedData: Record<string, Record<string, number>> = {};

    for (const item of data) {
      const birthYear = item.reviewer_birth_year;
      const sentiment = item.sentimento_text;
      const quantity = item.quantidade;
      const age = new Date().getFullYear() - birthYear;

      let ageRange = "";

      if (age >= 0 && age <= 19) {
        ageRange = "0-19";
      } else if (age >= 20 && age <= 59) {
        ageRange = "20-59";
      } else if (age >= 60) {
        ageRange = "60+";
      }

      if (groupedData[ageRange]) {
        if (groupedData[ageRange][sentiment]) {
          groupedData[ageRange][sentiment] += quantity;
        } else {
          groupedData[ageRange][sentiment] = quantity;
        }
      } else {
        groupedData[ageRange] = {
          [sentiment]: quantity
        };
      }
    }

    return groupedData;
  }

  const groupedData = groupByAgeAndSentiment(dataBar);

  const barDataPositive: number[] = [];
  const barDataNeutral: number[] = [];
  const barDataNegative: number[] = [];

  for (const ageRange in groupedData) {
    barDataPositive.push(groupedData[ageRange].positive || 0);
    barDataNeutral.push(groupedData[ageRange].neutra || 0);
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
    },
    legend: {
      position: "bottom",
      labels: {
        colors: "#FFFFFF",
      },
    },
    xaxis: {
      categories: ["0 - 19", "20 - 59", "60 +"],
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
      borderColor: "#424242",
    },
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
