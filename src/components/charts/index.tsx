import { BarAgeRangeChartComponent } from "@/data/chartBarAgeRange";
import { ChartBarComponent } from "@/data/chartBarData";
import { BarMedChartComponent } from "@/data/chartBarDataMed";
import { DonutsChartComponent } from "@/data/chartDonuts";
import { LineChartComponent } from "@/data/chartLineData";

export function DashboardCharts() {
  return (
    <div className="flex flex-col gap-5 justify-center">
      <div className="flex gap-5 h-[97px] w-full">
        <div className="flex items-center justify-center gap-5 w-full">
          <div className="flex flex-col gap-4 h-[97px] w-[25%] px-6 py-4 bg-transparent shadow-lg border border-border rounded-md hover:scale-105 hover:cursor-pointer">
            <h1 className="text-white font-semibold">
              Total de dados analisados
            </h1>
          </div>

          <div className="flex flex-col gap-4 h-[97px] w-[25%] px-6 py-4 bg-transparent shadow-lg border border-border rounded-md hover:scale-105 hover:cursor-pointer">
            <h1 className="text-white font-semibold">
              Acurácia dos resultados
            </h1>
          </div>

          <div className="flex flex-col gap-4 h-[97px] w-[25%] px-6 py-4 bg-transparent shadow-lg border border-border rounded-md hover:scale-105 hover:cursor-pointer">
            <h1 className="text-white font-semibold">
              Precisão dos restultados
            </h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 h-full w-full">
        <div className="flex items-center justify-center gap-4 grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col gap-4 w-full">
            <h1 className="text-white font-semibold">
              Distribuição de sentimento x tema.
            </h1>
            <div className="p-2 h-[345px] bg-transparent shadow-lg border border-border rounded-md">
              {/* <ChartBarComponent /> */}
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <h1 className="text-white font-semibold">
              Distribuição de sentimento x faixa etária.
            </h1>
            <div className="p-2 h-[345px] bg-transparent shadow-lg border border-border rounded-md">
              {/* <BarAgeRangeChartComponent /> */}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col gap-4 w-full">
            <h1 className="text-white font-semibold">
              Distribuição de temas ao longo do tempo.
            </h1>
            <div className="p-2 h-[345px] bg-transparent shadow-lg border border-border rounded-md">
              {/* <LineChartComponent /> */}
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <h1 className="text-white font-semibold">
              Distribuição total de sentimentos por tema.
            </h1>
            <div className="p-2 h-[345px] bg-transparent shadow-lg border border-border rounded-md">
              {/* <DonutsChartComponent /> */}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col gap-4 w-full">
            <h1 className="text-white font-semibold">
              Média de avaliação por tema.
            </h1>
            <div className="p-2 h-[345px] bg-transparent shadow-lg border border-border rounded-md">
              {/* <BarMedChartComponent /> */}
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <h1 className="text-white font-semibold">
              Média de avaliação por tema.
            </h1>
            <div className="p-2 h-[345px] bg-transparent shadow-lg border border-border rounded-md">
              {/* <BarMedChartComponent /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}