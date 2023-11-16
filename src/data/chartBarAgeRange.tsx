import { EmptyChart } from "@/components/emptyChart";
import apiPln from "@/services/api-pln.service";
import URI from "@/utils/enum/uri.enum";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

type BarAgeRangeChartProps = {
  reviewer_birth_year: number;
  classificacao_tema: number;
  quantidade: number;
  sentimento_text: string;
}

export function BarAgeRangeChartComponent() {
  const [dataBar, setDataBar] = useState<BarAgeRangeChartProps[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      apiPln
        .get<BarAgeRangeChartProps[]>(URI.GET_SENTIMENT_AGE)
        .then((response) => {
          const data = response.data;
          const dataFilterNull = data.filter(
            (item) => item.reviewer_birth_year !== 0
          );

          setDataBar(dataFilterNull);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    }, 1000);
  }, []);

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
      background: "transparent",
    },
    theme: {
      mode: "dark",
    },
    tooltip: {
      theme: "dark",
    },
    series: [
      {
        name: "Positivo",
        data: barDataPositive,
        color: "#33f182",
      },
      {
        name: "Negativo",
        data: barDataNegative,
        color: "#f23f42",
      },
    ],
    plotOptions: {
      bar: {
        borderRadius: 1.5,
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
        colors: ["#FFFFFF"],
      },
    },
    xaxis: {
      categories: ["0 - 19", "20 - 59", "60 +"],
      labels: {
        show: true,
        style: {
          colors: "#8997ac",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
        padding: 10,
        style: {
          colors: "#8997ac",
        },
      },
    },
    grid: {
      show: false,
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
          width="100%"
          height="100%"
          type="bar"
        />
      )}
    </>
  );
}