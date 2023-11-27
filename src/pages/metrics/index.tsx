import { HeaderComponent } from "@/components/headerComponent";
import { MetricsChartComponent } from "@/data/chartMetrics";
import { MetricsChartComponentV2 } from "@/data/chartMetrics_v2";
import apiPln from "@/services/api-pln.service";
import URI from "@/utils/enum/uri.enum";
import { Separator } from "@radix-ui/react-separator";
import { AlarmClock, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

type MetricsPageProps = {
  função: string;
  tempo: number;
};

export function MetricsPage() {
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
    }, 2000);
  }, []);

  function dataMed(data: string) {
    const dataMed = dataTime.filter((item) =>
      item.função === data ? item.tempo : 0
    );

    const dataF = dataMed.reduce((acc, item) => acc + item.tempo, 0);

    return dataF / dataMed.length;
  }

  return (
    <div className="p-4">
      <HeaderComponent />
      <div className="flex justify-center items-center p-5">
        <div className="flex flex-col justify-start gap-5 w-[71.875rem] h-screen">
          <div className="flex flex-col items-center justify-center gap-5">
            <div className="flex items-center justify-center gap-5 w-full">
              <div className="flex items-center justify-between p-5 h-full  w-[33%] border border-border rounded-md hover:scale-105 hover:cursor-pointer transition-all ">
                <div className="w-[30%]">
                  <div className="flex items-center justify-center rounded-full bg-primary-foreground  w-14 h-14">
                    <AlarmClock className="text-white" />
                  </div>
                </div>
                <div className="flex flex-col items-end w-[70%]">
                  <h1 className="text-muted-foreground text-sm font-thin">
                    Pré processamento
                  </h1>
                  <span className="text-2xl text-white font-semibold">
                    {/* {isLoading ? (
                      <div className="flex items-center justify-center h-full w-full">
                        <Loader2 className="animate-spin text-zinc-50" />
                        <p className="text-base text-zinc-50 ml-2">
                          Carregando...
                        </p>
                      </div>
                    ) : (
                      dataMed("preproc").toFixed(3) + "s"
                    )} */}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between p-5 h-full  w-[33%] border border-border rounded-md hover:scale-105 hover:cursor-pointer transition-all ">
                <div className="w-[30%]">
                  <div className="flex items-center justify-center rounded-full bg-primary-foreground  w-14 h-14">
                    <AlarmClock className="text-white" />
                  </div>
                </div>
                <div className="flex flex-col items-end w-[70%]">
                  <h1 className="text-muted-foreground text-sm font-thin">Stopword</h1>
                  <span className="text-2xl text-white font-semibold">
                    {/* {isLoading ? (
                      <div className="flex items-center justify-center h-full w-full">
                        <Loader2 className="animate-spin text-zinc-50" />
                        <p className="text-base text-zinc-50 ml-2">
                          Carregando...
                        </p>
                      </div>
                    ) : (
                      dataMed("stopwords").toFixed(3) + "s"
                    )} */}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between p-5 h-full  w-[33%] border border-border rounded-md hover:scale-105 hover:cursor-pointer transition-all ">
                <div className="w-[30%]">
                  <div className="flex items-center justify-center rounded-full bg-primary-foreground  w-14 h-14">
                    <AlarmClock className="text-white" />
                  </div>
                </div>
                <div className="flex flex-col items-end w-[70%]">
                  <h1 className="text-muted-foreground text-sm font-thin">
                    Tokenização
                  </h1>
                  <span className="text-2xl text-white font-semibold">
                    {/* {isLoading ? (
                      <div className="flex items-center justify-center h-full w-full">
                        <Loader2 className="animate-spin text-zinc-50" />
                        <p className="text-base text-zinc-50 ml-2">
                          Carregando...
                        </p>
                      </div>
                    ) : (
                      dataMed("tokenização").toFixed(3) + "s"
                    )} */}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-5 w-full">
              <div className="flex items-center justify-between p-5 h-full  w-[33%] border border-border rounded-md hover:scale-105 hover:cursor-pointer transition-all ">
                <div className="w-[30%]">
                  <div className="flex items-center justify-center rounded-full bg-primary-foreground  w-14 h-14">
                    <AlarmClock className="text-white" />
                  </div>
                </div>
                <div className="flex flex-col items-end w-[70%]">
                  <h1 className="text-muted-foreground text-sm font-thin">
                    Analise de sentimentos
                  </h1>
                  <span className="text-2xl text-white font-semibold">
                    {/* {isLoading ? (
                      <div className="flex items-center justify-center h-full w-full">
                        <Loader2 className="animate-spin text-zinc-50" />
                        <p className="text-base text-zinc-50 ml-2">
                          Carregando...
                        </p>
                      </div>
                    ) : (
                      dataMed("sentimento").toFixed(3) + "s"
                    )} */}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between p-5 h-full  w-[33%] border border-border rounded-md hover:scale-105 hover:cursor-pointer transition-all ">
                <div className="w-[30%]">
                  <div className="flex items-center justify-center rounded-full bg-primary-foreground  w-14 h-14">
                    <AlarmClock className="text-white" />
                  </div>
                </div>
                <div className="flex flex-col items-end w-[70%]">
                  <h1 className="text-muted-foreground text-sm font-thin">
                    Classificação de tema
                  </h1>
                  <span className="text-2xl text-white font-semibold">
                    {/* {isLoading ? (
                      <div className="flex items-center justify-center h-full w-full">
                        <Loader2 className="animate-spin text-zinc-50" />
                        <p className="text-base text-zinc-50 ml-2">
                          Carregando...
                        </p>
                      </div>
                    ) : (
                      dataMed("class_tema").toFixed(3) + "s"
                    )} */}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between p-5 h-full w-[33%] border border-border rounded-md hover:scale-105 hover:cursor-pointer transition-all ">
                <div className="w-[30%]">
                  <div className="flex items-center justify-center rounded-full bg-primary-foreground  w-14 h-14">
                    <AlarmClock className="text-white" />
                  </div>
                </div>
                <div className="flex flex-col items-end w-[70%]">
                  <h1 className="text-muted-foreground text-sm font-thin">
                    Correção ortográfica
                  </h1>
                  <span className="text-2xl text-white font-semibold">
                    {/* {isLoading ? (
                      <div className="flex items-center justify-center h-full w-full">
                        <Loader2 className="animate-spin text-zinc-50" />
                        <p className="text-base text-zinc-50 ml-2">
                          Carregando...
                        </p>
                      </div>
                    ) : (
                      dataMed("correcao_ortografica").toFixed(3) + "s"
                    )} */}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 h-[65%] p-6 border border-border rounded-md">
            <h1 className="text-white font-semibold">
              Análise de tempo de execução por dia.
            </h1>
            {/* <MetricsChartComponent />
            <MetricsChartComponentV2 /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
