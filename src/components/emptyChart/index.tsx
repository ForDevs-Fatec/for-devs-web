import Chart from "react-apexcharts";

export function EmptyChart() {

  const options: ApexCharts.ApexOptions = {
    chart: {
      height: '100%',
      width: '100%',
      background: "transparent",
    },
    dataLabels: {
      enabled: false,
    },
    series: [],
    noData: {
      text: "Carregando dados...",
        style: {
            color: "#fff",
        }
    },
    xaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        }
      },
      yaxis: {
        labels: {
          show: false,
          padding: 10,
          style: {
            colors: "#8997ac",
          }
        },
      },
      grid: {
        show: false,
      },
  };

  return (
    <Chart
      options={options}
      series={options.series}
    />
  );
}
